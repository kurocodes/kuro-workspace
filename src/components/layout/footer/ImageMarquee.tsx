import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  wrap,
} from "motion/react";
import { useRef } from "react";
import { useResize } from "./useResize";

type ImageMarqueeProps = {
  images: string[];
  speed?: number;
};

export default function ImageMarquee({
  images,
  speed = 50,
}: ImageMarqueeProps) {
  const baseX = useMotionValue(0);
  const direction = useRef(-1);
  const [contentRef, contentSize] = useResize();

  useAnimationFrame((_, delta) => {
    if (!contentSize.width) return;
    const moveBy = direction.current * speed * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) =>
    contentSize.width ? `${wrap(-contentSize.width, 0, v)}px` : "0px",
  );

  return (
    <div className="w-full overflow-hidden">
      <motion.div className="flex w-max will-change-transform" style={{ x }}>
        {/* Original */}
        <div ref={contentRef} className="flex shrink-0">
          {images.map((src, i) => (
            <img
              key={`a-${i}`}
              src={src}
              className="h-18 w-auto pointer-events-none select-none"
              draggable={false}
              loading="eager"
              decoding="async"
            />
          ))}
        </div>

        {/* Duplicate */}
        <div className="flex shrink-0">
          {images.map((src, i) => (
            <img
              key={`b-${i}`}
              src={src}
              className="h-18 w-auto pointer-events-none select-none"
              draggable={false}
              loading="eager"
              decoding="async"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
