import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { asyncStorage } from "../libs/asyncStorage";

interface UIState {
  theme: "light" | "dark";
  toggleTheme: () => void;
  isSidebarOpen: boolean;
  setSidebar: (open: boolean) => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set, get) => ({
      theme: "light",
      toggleTheme: () =>
        set({ theme: get().theme === "light" ? "dark" : "light" }),
      isSidebarOpen: false,
      setSidebar: (open) => set({ isSidebarOpen: open }),
    }),
    {
      name: "ui-storage",
      storage: createJSONStorage(() => asyncStorage),
    }
  )
);
