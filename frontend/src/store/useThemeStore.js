import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("lovetime-theme") || "forest",
  setTheme: (theme) => {
    localStorage.setItem("lovetime-theme", theme);
    set({ theme });
  },
}));
