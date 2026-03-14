import { useWindowStore } from "./windowStore";

export function useWindowManager() {
  const open = useWindowStore((s) => s.openWindow);
  const close = useWindowStore((s) => s.closeWindow);
  const toggle = useWindowStore((s) => s.toggleWindow);
  const focus = useWindowStore((s) => s.focusWindow);
  const move = useWindowStore((s) => s.moveWindow);
  const clear = useWindowStore((s) => s.clearWindows);
  const windows = useWindowStore((s) => s.windows);

  return { windows, open, close, toggle, focus, move, clear };
}
