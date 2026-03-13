import { useEffect } from "react";

type KeyboardActions = {
  toggleTheme?: () => void;
  toggleInteractive?: () => void;
};

export function useKeyboard(actions: KeyboardActions) {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey) {
        if (e.code === "KeyT" && actions.toggleTheme) {
          e.preventDefault();
          actions.toggleTheme();
        }

        if (e.code === "KeyI" && actions.toggleInteractive) {
          e.preventDefault();
          actions.toggleInteractive();
        }
      }
    };

    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, [actions]);
}
