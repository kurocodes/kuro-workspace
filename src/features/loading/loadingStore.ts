import { create } from "zustand";

type LoadingState = {
  progress: number;
  isLoading: boolean;
  setProgress: (p: number) => void;
  start: () => void;
  finish: () => void;
};

export const useLoadingStore = create<LoadingState>((set) => ({
  progress: 0,
  isLoading: true,

  setProgress: (p) => set({ progress: p }),

  start: () => set({ progress: 0, isLoading: true }),

  finish: () => set({ progress: 100, isLoading: false }),
}));
