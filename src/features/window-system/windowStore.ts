import { create } from "zustand";
import type { WindowId, WindowInstance } from "./windowTypes";
import type { WindowDefinition } from "./definitions/windowsDefinition";

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
    const existing = get().windows.find((w) => w.id === definition.id);
    if (existing?.isOpen) return;

    // if window was opened before - just flip it back open and re-focus
    if (existing) {
      const newZ = get().topZ + 1;
      set((state) => ({
        windows: state.windows.map((w) =>
          w.id === definition.id ? { ...w, isOpen: true, zIndex: newZ } : w,
        ),
        topZ: newZ,
      }));

      return;
    }

    // new window - create instance
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const isMobile = screenWidth < 768;

    const width = isMobile
      ? Math.min(screenWidth - 32, definition.defaultWidth)
      : definition.defaultWidth;

    const height =
      isMobile && definition.defaultHeight !== undefined
        ? Math.min(screenHeight - 120, definition.defaultHeight)
        : definition.defaultHeight;

    const x = isMobile ? 0 : (definition.defaultX ?? 100);
    const y = isMobile ? 0 : (definition.defaultY ?? 100);
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
          isOpen: true,
        },
      ],
      topZ: newZ,
    }));
  },

  closeWindow: (id) => {
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, isOpen: false } : w,
      ),
    }));
  },

  toggleWindow: (definition) => {
    const existing = get().windows.find((w) => w.id === definition.id);
    if (existing?.isOpen) {
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
