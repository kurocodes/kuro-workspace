import { useLoadingStore } from "./loadingStore";
import { motion } from "motion/react";

export default function Loader() {
  const { progress } = useLoadingStore();

  return (
    <div className="absolute inset-0 z-999 flex items-center justify-center bg-surface">
      <div className="text-center">
        <div className="w-64 h-px bg-border-soft rounded">
          <div className="w-full h-full bg-panel">
            <motion.div
              className="h-full w-full bg-outline rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <p className="mt-2 text-sm text-ink/50 font-light">{progress}%</p>
      </div>
    </div>
  );
}
