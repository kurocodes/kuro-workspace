import { useState } from "react";
import FolderIcon from "./FolderIcon";

interface DesktopIconProps {
  title: string;
  onClick: () => void;
}

export default function DesktopIcon({ title, onClick }: DesktopIconProps) {
  const [lastTap, setLastTap] = useState(0);

  const handlePointerDown = () => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;

    if (now - lastTap < DOUBLE_TAP_DELAY) {
      onClick();
      setLastTap(0); // Reset after double click
    } else {
      setLastTap(now);
    }
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      className="flex flex-col items-center gap-2 w-28 relative z-1 cursor-pointer text-center select-none"
    >
      <FolderIcon />

      <div className="max-w-[90%] bg-paper border-medium border-outline rounded-card px-2 text-sm text-outline font-medium line-clamp-2 wrap-break-word">
        {title}
      </div>
    </div>
  );
}
