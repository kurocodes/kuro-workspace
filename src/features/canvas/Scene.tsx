import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  originX: number;
  originY: number;
  radius: number;
  r: number;
  g: number;
  b: number;
};

const FAR = -10000;
const SPACING = 10;
const INFLUENCE = 100;
const INFLUENCE_SQ = INFLUENCE * INFLUENCE;

export default function Scene({
  image,
  alignX = "right",
  alignY = "center",
}: {
  image?: string;
  alignX?: "left" | "center" | "right";
  alignY?: "top" | "center" | "bottom";
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Setup
    const canvas = canvasRef.current;
    if (!canvas || !image) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pointer = { x: FAR, y: FAR };
    const particles: Particle[] = [];

    // Pointer Interaction
    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      pointer.x = FAR;
      pointer.y = FAR;
    };

    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);

    // Image Loading
    const img = new Image();
    img.src = image;

    img.onload = () => {
      // Canvas Size
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width;
      canvas.height = rect.height;

      // Cover Scaling
      const canvasRatio = canvas.width / canvas.height;
      const imageRatio = img.width / img.height;

      let drawWidth = canvas.width;
      let drawHeight = canvas.height;

      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imageRatio) {
        drawHeight = canvas.width / imageRatio;
        drawWidth = canvas.width;
      } else {
        drawWidth = canvas.height * imageRatio;
        drawHeight = canvas.height;
      }

      // horizontal alignment
      if (alignX === "left") {
        offsetX = 0;
      } else if (alignX === "center") {
        offsetX = (canvas.width - drawWidth) / 2;
      } else if (alignX === "right") {
        offsetX = canvas.width - drawWidth;
      }

      // vertical alignment
      if (alignY === "top") {
        offsetY = 0;
      } else if (alignY === "center") {
        offsetY = (canvas.height - drawHeight) / 2;
      } else if (alignY === "bottom") {
        offsetY = canvas.height - drawHeight;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      // Image Sampling
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Particle Creation
      for (let y = 0; y < canvas.height; y += SPACING) {
        for (let x = 0; x < canvas.width; x += SPACING) {
          const index = (y * canvas.width + x) * 4;

          const r = data[index];
          const g = data[index + 1];
          const b = data[index + 2];

          const radius = SPACING * 0.45;

          particles.push({
            x,
            y,
            originX: x,
            originY: y,
            radius,
            r,
            g,
            b,
          });
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Rendering
      function drawParticles() {
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas!.width, canvas!.height);

        particles.forEach((p) => {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;

          const distSq = dx * dx + dy * dy;

          if (distSq < INFLUENCE_SQ) {
            const dist = Math.sqrt(distSq); // only when needed
            const force = (INFLUENCE - dist) / INFLUENCE;

            const pushX = dx * force * 0.1;
            const pushY = dy * force * 0.1;

            p.x += pushX;
            p.y += pushY;
          }

          // spring return
          p.x += (p.originX - p.x) * 0.05;
          p.y += (p.originY - p.y) * 0.05;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgb(${p.r},${p.g},${p.b})`;
          ctx.fill();
        });
      }

      // Animation Look
      function animate() {
        drawParticles();
        requestAnimationFrame(animate);
      }

      animate();
    };

    return () => {
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [image, alignX, alignY]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
