import { useDrag } from "../../../hooks/useDrag";
import WindowIcon from "./WindowIcon";

interface WindowHeaderProps {
  title: string;
  handleMove: (dx: number, dy: number) => void;
  handleClose: () => void;
}

export default function WindowHeader({
  title,
  handleMove,
  handleClose,
}: WindowHeaderProps) {
  const { handlePointerDown } = useDrag({
    onDrag: (dx, dy) => handleMove(dx, dy),
  });

  return (
    <div
      onPointerDown={handlePointerDown}
      className="bg-surface border-b-thick border-outline select-none"
    >
      <div className="px-2 py-1 flex justify-between items-center">
        <div className="text-outline font-mono font-medium">{title}</div>

        <div className="flex items-center gap-1 cursor-pointer">
          <WindowIcon variant="maximize" />
          <WindowIcon variant="close" onClick={handleClose} />
        </div>
      </div>
    </div>
  );
}
