import { useEffect, useRef } from "react";
import { useLoadingStore } from "../loading/loadingStore";

type Particle = {
  x: number;
  y: number;
  originX: number;
  originY: number;
  radius: number;
  color: string;
};

async function buildParticlesAsync(
  w: number,
  h: number,
  data: ImageDataArray,
  particles: Particle[],
  setProgress: (p: number) => void,
) {
  let lastProgress = 0;
  for (let y = 0; y < h; y += SPACING) {
    const progress = Math.floor((y / h) * 100);
    if (progress !== lastProgress) {
      setProgress(progress);
      lastProgress = progress;
    }
    for (let x = 0; x <= w; x += SPACING) {
      const index = (y * w + x) * 4;
      particles.push({
        x,
        y,
        originX: x,
        originY: y,
        radius: SPACING * 0.45,
        color: `rgb(${data[index]}, ${data[index + 1]}, ${data[index + 2]})`,
      });
    }

    await new Promise(requestAnimationFrame);
  }
}

const FAR = -10000;
const SPACING = 12;
const INFLUENCE = 90;
const INFLUENCE_SQ = INFLUENCE * INFLUENCE;
const POINTER_SMOOTHING = 0.18;
const RETURN_SPEED = 0.08;
const PUSH_STRENGTH = 0.1;

export default function Scene({
  image,
  alignX = "center",
  alignY = "center",
  onReady,
  onStart,
}: {
  image?: string;
  alignX?: "left" | "center" | "right";
  alignY?: "top" | "center" | "bottom";
  onReady?: () => void;
  onStart?: () => void;
}) {
  const { setProgress } = useLoadingStore();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerTargetRef = useRef({ x: FAR, y: FAR });
  const pointerRef = useRef({ x: FAR, y: FAR });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !image) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
      willReadFrequently: true,
    });
    if (!ctx) return;

    let animationId = 0;
    let isMounted = true;
    let particles: Particle[] = [];

    // Pointer Interaction
    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerTargetRef.current.x = e.clientX - rect.left;
      pointerTargetRef.current.y = e.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      pointerTargetRef.current.x = FAR;
      pointerTargetRef.current.y = FAR;
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    // All canvas setup in one plain function — callable anytime
    async function rebuild(img: HTMLImageElement) {
      particles = [];

      // Read live rect HERE — this is the fresh size after reflow
      const rect = canvas!.getBoundingClientRect();
      const w = Math.floor(rect.width);
      const h = Math.floor(rect.height);

      if (w === 0 || h === 0) return;

      // Re-stamp the pixel buffer to the new size
      canvas!.width = w;
      canvas!.height = h;

      // Cover scaling
      const canvasRatio = w / h;
      const imageRatio = img.width / img.height;

      let drawWidth = w;
      let drawHeight = h;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imageRatio) {
        drawHeight = w / imageRatio;
        drawWidth = w;
      } else {
        drawWidth = h * imageRatio;
        drawHeight = h;
      }

      if (alignX === "left") offsetX = 0;
      else if (alignX === "center") offsetX = (w - drawWidth) / 2;
      else if (alignX === "right") offsetX = w - drawWidth;

      if (alignY === "top") offsetY = 0;
      else if (alignY === "center") offsetY = (h - drawHeight) / 2;
      else if (alignY === "bottom") offsetY = h - drawHeight;

      ctx!.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      // Sample pixels and build particles
      const imageData = ctx!.getImageData(0, 0, w, h);
      const data = imageData.data;

      await buildParticlesAsync(w, h, data, particles, setProgress);

      ctx!.clearRect(0, 0, w, h);
    }

    // Image Loading
    const img = new Image();
    img.src = image;

    const onLoad = async () => {
      if (!isMounted) return;

      onStart?.();
      await rebuild(img);
      setProgress(100);

      setTimeout(() => {
        onReady?.();
      }, 200);

      // Animation loop — always reads from the live `particles` array ref
      const animate = () => {
        if (!isMounted) return;

        const w = canvas!.width;
        const h = canvas!.height;

        ctx!.clearRect(0, 0, w, h);

        pointerRef.current.x +=
          (pointerTargetRef.current.x - pointerRef.current.x) *
          POINTER_SMOOTHING;
        pointerRef.current.y +=
          (pointerTargetRef.current.y - pointerRef.current.y) *
          POINTER_SMOOTHING;

        for (const p of particles) {
          const dx = p.x - pointerRef.current.x;
          const dy = p.y - pointerRef.current.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < INFLUENCE_SQ) {
            const dist = Math.sqrt(distSq);
            const force = (INFLUENCE - dist) / INFLUENCE;
            p.x += dx * force * PUSH_STRENGTH;
            p.y += dy * force * PUSH_STRENGTH;
          }

          p.x += (p.originX - p.x) * RETURN_SPEED;
          p.y += (p.originY - p.y) * RETURN_SPEED;

          ctx!.fillStyle = p.color;
          ctx!.fillRect(
            p.x - p.radius,
            p.y - p.radius,
            p.radius * 2,
            p.radius * 2,
          );
        }

        animationId = requestAnimationFrame(animate);
      };

      animate();
    };

    // ✅ Handle both: fresh load and already-cached image
    if (img.complete) {
      onLoad();
    } else {
      img.onload = onLoad;
    }

    // ✅ ResizeObserver calls rebuild() directly — no React state, no effect re-run
    let debounceTimer: ReturnType<typeof setTimeout>;
    const ro = new ResizeObserver(() => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        if (isMounted && img.complete) rebuild(img);
      }, 150);
    });
    ro.observe(canvas);

    return () => {
      isMounted = false;
      cancelAnimationFrame(animationId);
      clearTimeout(debounceTimer);
      ro.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [image, alignX, alignY, onReady, onStart, setProgress]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full touch-none"
    />
  );
}
