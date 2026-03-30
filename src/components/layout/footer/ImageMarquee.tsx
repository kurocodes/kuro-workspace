import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  wrap,
} from "motion/react";
import { useRef, useState } from "react";
import { useResize } from "./useResize";
import type { MarqueeItem } from "../../../utils/types";

type ImageMarqueeProps = {
  items: MarqueeItem[];
  onItemClick: (item: MarqueeItem) => void;
  speed?: number;
};

export default function ImageMarquee({
  items,
  onItemClick,
  speed = 50,
}: ImageMarqueeProps) {
  const baseX = useMotionValue(0);
  const direction = useRef(-1);
  const [contentRef, contentSize] = useResize();

  const [isPaused, setIsPaused] = useState(false);

  useAnimationFrame((_, delta) => {
    if (!contentSize.width || isPaused) return;
    const moveBy = direction.current * speed * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) =>
    contentSize.width ? `${wrap(-contentSize.width, 0, v)}px` : "0px",
  );

  return (
    <div
      className="w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div className="flex w-max will-change-transform" style={{ x }}>
        {/* Original */}
        <div ref={contentRef} className="flex shrink-0">
          {items.map((item, i) => (
            <img
              key={`a-${i}`}
              src={item.src}
              className="h-18 w-auto select-none"
              draggable={false}
              loading="eager"
              decoding="async"
              onClick={() => onItemClick(item)}
            />
          ))}
        </div>

        {/* Duplicate */}
        <div className="flex shrink-0">
          {items.map((item, i) => (
            <img
              key={`b-${i}`}
              src={item.src}
              className="h-18 w-auto select-none"
              draggable={false}
              loading="eager"
              decoding="async"
              onClick={() => onItemClick(item)}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
