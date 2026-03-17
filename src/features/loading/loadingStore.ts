import { create } from "zustand";

type LoadingState = {
  progress: number;
  isLoading: boolean;
  setProgress: (p: number) => void;
  finish: () => void;
};

export const useLoadingStore = create<LoadingState>((set) => ({
  progress: 0,
  isLoading: true,

  setProgress: (p) => set({ progress: p }),

  finish: () => set({ progress: 100, isLoading: false }),
}));
