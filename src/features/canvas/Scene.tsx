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
    const canvas = canvasRef.current;
    if (!canvas || !image) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = image;

    const particles: Particle[] = [];

    img.onload = () => {
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width;
      canvas.height = rect.height;

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

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      const spacing = 10;

      const mouse = {
        x: FAR,
        y: FAR,
      };

      canvas.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      });
      canvas.addEventListener("mouseleave", () => {
        mouse.x = FAR;
        mouse.y = FAR;
      });

      for (let y = 0; y < canvas.height; y += spacing) {
        for (let x = 0; x < canvas.width; x += spacing) {
          const index = (y * canvas.width + x) * 4;

          const r = data[index];
          const g = data[index + 1];
          const b = data[index + 2];

          const maxRadius = spacing / 2;
          const radius = maxRadius;

          particles.push({
            x,
            y,
            originX: x,
            originY: y,
            radius,
            color: `rgb(${r},${g},${b})`,
          });
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      function drawParticles() {
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas!.width, canvas!.height);

        particles.forEach((p) => {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          const influence = 120;

          if (dist < influence) {
            const force = (influence - dist) / influence;

            const pushX = dx * force * 0.2;
            const pushY = dy * force * 0.2;

            p.x += pushX;
            p.y += pushY;
          }

          // spring return
          p.x += (p.originX - p.x) * 0.05;
          p.y += (p.originY - p.y) * 0.05;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        });
      }

      function animate() {
        drawParticles();
        requestAnimationFrame(animate);
      }

      animate();
    };
  }, [image]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
