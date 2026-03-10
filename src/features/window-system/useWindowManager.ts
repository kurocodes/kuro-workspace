import { useWindowStore } from "./windowStore";

export function useWindowManager() {
  const open = useWindowStore((s) => s.openWindow);
  const close = useWindowStore((s) => s.closeWindow);
  const focus = useWindowStore((s) => s.focusWindow);
  const move = useWindowStore((s) => s.moveWindow);
  const windows = useWindowStore((s) => s.windows);

  return { windows, open, close, focus, move };
}
