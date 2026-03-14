import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  originX: number;
  originY: number;
  radius: number;
  color: string;
};

const FAR = -10000;
const SPACING = 12;
const INFLUENCE = 90;
const INFLUENCE_SQ = INFLUENCE * INFLUENCE;
const POINTER_SMOOTHING = 0.18;
const RETURN_SPEED = 0.05;
const PUSH_STRENGTH = 0.1;

export default function Scene({
  image,
  alignX = "center",
  alignY = "center",
}: {
  image?: string;
  alignX?: "left" | "center" | "right";
  alignY?: "top" | "center" | "bottom";
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerTargetRef = useRef({ x: FAR, y: FAR });
  const pointerRef = useRef({ x: FAR, y: FAR });

  useEffect(() => {
    // Setup
    const canvas = canvasRef.current;
    if (!canvas || !image) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationId = 0;
    let isMounted = true;
    const particles: Particle[] = [];

    // Pointer Interaction
    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerTargetRef.current.x = e.clientX - rect.left;
      pointerTargetRef.current.y = e.clientY - rect.top;
      // pointerRef.current.x = e.clientX - rect.left;
      // pointerRef.current.y = e.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      pointerTargetRef.current.x = FAR;
      pointerTargetRef.current.y = FAR;
    };

    // Image Loading
    const img = new Image();
    img.src = image;

    img.onload = () => {
      if (!isMounted) return;

      // Canvas Size
      const rect = canvas.getBoundingClientRect();
      const dpr = 1;

      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      canvas.addEventListener("pointermove", handlePointerMove);
      canvas.addEventListener("pointerleave", handlePointerLeave);

      // Cover Scaling
      const canvasWidth = rect.width;
      const canvasHeight = rect.height;

      const canvasRatio = canvasWidth / canvasHeight;
      const imageRatio = img.width / img.height;

      let drawWidth = canvasWidth;
      let drawHeight = canvasHeight;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imageRatio) {
        drawHeight = canvasWidth / imageRatio;
        drawWidth = canvasWidth;
      } else {
        drawWidth = canvasHeight * imageRatio;
        drawHeight = canvasHeight;
      }

      // horizontal alignment
      if (alignX === "left") {
        offsetX = 0;
      } else if (alignX === "center") {
        offsetX = (canvasWidth - drawWidth) / 2;
      } else if (alignX === "right") {
        offsetX = canvasWidth - drawWidth;
      }

      // vertical alignment
      if (alignY === "top") {
        offsetY = 0;
      } else if (alignY === "center") {
        offsetY = (canvasHeight - drawHeight) / 2;
      } else if (alignY === "bottom") {
        offsetY = canvasHeight - drawHeight;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      // Image Sampling
      const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
      const data = imageData.data;

      // Particle Creation
      for (let y = 0; y < canvasHeight; y += SPACING) {
        for (let x = 0; x <= canvasWidth; x += SPACING) {
          const index = (y * canvasWidth + x) * 4;

          const r = data[index];
          const g = data[index + 1];
          const b = data[index + 2];

          particles.push({
            x,
            y,
            originX: x,
            originY: y,
            radius: SPACING * 0.45,
            color: `rgb(${r}, ${g}, ${b})`,
          });
        }
      }

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Rendering
      function drawParticles() {
        if (!ctx) return;

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        pointerRef.current.x += (pointerTargetRef.current.x - pointerRef.current.x) * POINTER_SMOOTHING;
        pointerRef.current.y += (pointerTargetRef.current.y - pointerRef.current.y) * POINTER_SMOOTHING;

        particles.forEach((p) => {
          const dx = p.x - pointerRef.current.x;
          const dy = p.y - pointerRef.current.y;

          const distSq = dx * dx + dy * dy;

          if (distSq < INFLUENCE_SQ) {
            const dist = Math.sqrt(distSq); // only when needed
            const force = (INFLUENCE - dist) / INFLUENCE;

            const pushX = dx * force * PUSH_STRENGTH;
            const pushY = dy * force * PUSH_STRENGTH;

            p.x += pushX;
            p.y += pushY;
          }

          // spring return
          p.x += (p.originX - p.x) * RETURN_SPEED;
          p.y += (p.originY - p.y) * RETURN_SPEED;

          ctx.fillStyle = p.color;
          ctx.fillRect(
            p.x - p.radius,
            p.y - p.radius,
            p.radius * 2,
            p.radius * 2
          );
        });
      }

      // Animation Loop
      const animate = () => {
        drawParticles();
        animationId = requestAnimationFrame(animate);
      };

      animate();
    };

    return () => {
      isMounted = false;
      cancelAnimationFrame(animationId);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [image, alignX, alignY]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full touch-none"
    />
  );
}
