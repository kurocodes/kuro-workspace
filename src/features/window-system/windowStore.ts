import { create } from "zustand";
import type { WindowId, WindowInstance } from "./windowTypes";
import { windowRegistry } from "./windowRegistry";

type WindowStore = {
  windows: WindowInstance[];
  topZ: number;

  openWindow: (id: WindowId) => void;
  closeWindow: (id: WindowId) => void;
  toggleWindow: (id: WindowId) => void;
  focusWindow: (id: WindowId) => void;
  moveWindow: (id: WindowId, x: number, y: number) => void;
};

export const useWindowStore = create<WindowStore>((set, get) => ({
  windows: [],
  topZ: 1,

  openWindow: (id) => {
    const exists = get().windows.find((w) => w.id === id);
    if (exists) return;

    const definition = windowRegistry[id];

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const isMobile = screenWidth < 768;

    const width = isMobile
      ? Math.min(screenWidth - 32, definition.defaultWidth)
      : definition.defaultWidth;
    const height = isMobile
      ? Math.min(screenHeight - 120, definition.defaultHeight)
      : definition.defaultHeight;

    const x = isMobile ? 16 : (definition.defaultX ?? 100);
    const y = isMobile ? 80 : (definition.defaultY ?? 100);

    const newZ = get().topZ + 1;

    set((state) => ({
      windows: [
        ...state.windows,
        {
          id,
          x,
          y,
          width,
          height,
          zIndex: newZ,
        },
      ],
      topZ: newZ,
    }));
  },

  closeWindow: (id) => {
    set((state) => ({
      windows: state.windows.filter((w) => w.id !== id),
    }));
  },

  toggleWindow: (id) => {
    const exists = get().windows.find((w) => w.id === id);
    if (exists) {
      get().closeWindow(id);
    } else {
      get().openWindow(id);
    }
  },

  focusWindow: (id) => {
    const newZ = get().topZ + 1;

    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, zIndex: newZ } : w,
      ),
      topZ: newZ,
    }));
  },

  moveWindow: (id, dx, dy) => {
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, x: w.x + dx, y: w.y + dy } : w,
      ),
    }));
  },
}));
