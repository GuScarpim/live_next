import { create } from 'zustand';

type LoadingGlobalState = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
};

export const useLoadingGlobalStore = create<LoadingGlobalState>((set) => ({
  isLoading: false,
  setIsLoading: (value) => set({ isLoading: value }),
}));
