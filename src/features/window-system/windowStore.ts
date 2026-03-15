import { create } from "zustand";
import type { WindowId, WindowInstance } from "./windowTypes";
import type { WindowDefinition } from "./definitions/windowDefinitions";

type WindowStore = {
  windows: WindowInstance[];
  topZ: number;

  openWindow: (definition: WindowDefinition) => void;
  closeWindow: (id: WindowId) => void;
  toggleWindow: (definition: WindowDefinition) => void;
  focusWindow: (id: WindowId) => void;
  moveWindow: (id: WindowId, dx: number, dy: number) => void;
  clearWindows: () => void;
};

export const useWindowStore = create<WindowStore>((set, get) => ({
  windows: [],
  topZ: 1,

  openWindow: (definition) => {
    const exists = get().windows.find((w) => w.id === definition.id);
    if (exists) return;

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
          id: definition.id,
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

  toggleWindow: (definition) => {
    const exists = get().windows.find((w) => w.id === definition.id);
    if (exists) {
      get().closeWindow(definition.id);
    } else {
      get().openWindow(definition);
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

  clearWindows: () => set({ windows: [], topZ: 1 }),
}));
