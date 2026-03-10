import { create } from "zustand";
import type { WindowId, WindowInstance } from "./windowTypes";

type WindowStore = {
    windows: WindowInstance[];
    topZ: number;

    openWindow: (id: WindowId) => void;
    closeWindow: (id: WindowId) => void;
    focusWindow: (id: WindowId) => void;
    moveWindow: (id: WindowId, x: number, y: number) => void;
}

export const useWindowStore = create<WindowStore>((set, get) => ({
    windows: [],
    topZ: 1,

    openWindow: (id) => {
        const exists = get().windows.find((w) => w.id === id);
        if (exists) return;

        const newZ = get().topZ + 1;

        set((state) => ({
            windows: [
                ...state.windows,
                {
                    id,
                    x: 100,
                    y: 100,
                    zIndex: newZ,
                }
            ],
            topZ: newZ,
        }))
    },

    closeWindow: (id) => {
        set((state) => ({
            windows: state.windows.filter((w) => w.id !== id),
        }))
    },

    focusWindow: (id) => {
        const newZ = get().topZ + 1;

        set((state) => ({
            windows: state.windows.map((w) => w.id === id ? { ...w, zIndex: newZ } : w), topZ: newZ,
        }))
    },

    moveWindow: (id, dx, dy) => {
        set((state) => ({
            windows: state.windows.map((w) => w.id === id ? { ...w, x: w.x + dx, y: w.y + dy } : w)
        }))
    }
}))