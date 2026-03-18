import type { ReactNode } from "react";
import { motion } from "motion/react";
import WindowHeader from "./WindowHeader";

interface WindowProps {
  title: string;
  x: number;
  y: number;
  zIndex: number;
  width: number;
  height: number | string;
  handleFocus: () => void;
  handleMove: (dx: number, dy: number) => void;
  handleClose: () => void;
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
}

export default function Window({
  title,
  x,
  y,
  zIndex,
  width,
  height,
  handleFocus,
  handleMove,
  handleClose,
  children,
  className,
  backgroundImage,
}: WindowProps) {
  return (
    <motion.div
      // layout
      // initial={{ scale: 0 }}
      // animate={{ scale: 1 }}
      // exit={{ scale: 0, opacity: 0 }}
      onPointerDown={handleFocus}
      className={`absolute border-thick border-outline rounded-card overflow-hidden shadow-window origin-bottom touch-none ${className}`}
      style={{
        x,
        y,
        zIndex,
      }}
    >
      {/* Header (Drag Handle) */}
      <WindowHeader
        title={title}
        handleMove={handleMove}
        handleClose={handleClose}
      />

      {/* Content */}
      <div
        className="bg-paper w-full"
        style={{
          width,
          height,
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
          backgroundSize: backgroundImage ? "cover" : undefined,
          backgroundPosition: backgroundImage ? "center" : undefined,
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}
