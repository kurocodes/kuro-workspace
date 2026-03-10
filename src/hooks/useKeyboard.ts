import { useEffect } from "react";

export function useKeyboard(toggleTheme: () => void) {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.code === "KeyT") {
  e.preventDefault();
  toggleTheme();
}
    };

    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, [toggleTheme]);
}
