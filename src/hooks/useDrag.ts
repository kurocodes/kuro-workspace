import { useCallback, useRef, useEffect } from "react";

type UseDragOptions = {
  onDragStart?: () => void;
  onDrag?: (dx: number, dy: number) => void;
  onDragEnd?: () => void;
};

export function useDrag({ onDragStart, onDrag, onDragEnd }: UseDragOptions) {
  const startX = useRef(0);
  const startY = useRef(0);
  const dragging = useRef(false);

  const moveHandlerRef = useRef<((e: PointerEvent) => void) | null>(null);
  const upHandlerRef = useRef<((e: PointerEvent) => void) | null>(null);

  useEffect(() => {
    moveHandlerRef.current = (e: PointerEvent) => {
      if (!dragging.current) return;

      const dx = e.clientX - startX.current;
      const dy = e.clientY - startY.current;

      startX.current = e.clientX;
      startY.current = e.clientY;

      onDrag?.(dx, dy);
    };

    upHandlerRef.current = () => {
      dragging.current = false;

      onDragEnd?.();

      if (moveHandlerRef.current)
        window.removeEventListener("pointermove", moveHandlerRef.current);

      if (upHandlerRef.current)
        window.removeEventListener("pointerup", upHandlerRef.current);
    };
  }, [onDrag, onDragEnd]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      dragging.current = true;
      startX.current = e.clientX;
      startY.current = e.clientY;

      onDragStart?.();

      if (moveHandlerRef.current)
        window.addEventListener("pointermove", moveHandlerRef.current);

      if (upHandlerRef.current)
        window.addEventListener("pointerup", upHandlerRef.current);
    },
    [onDragStart],
  );

  return { handlePointerDown };
}
