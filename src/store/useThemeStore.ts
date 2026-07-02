import { create } from "zustand";

interface ThemeState {
  isAdminSidebarOpen: boolean;
  toggleAdminSidebar: () => void;
  setAdminSidebarOpen: (open: boolean) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  isAdminSidebarOpen: true,
  toggleAdminSidebar: () =>
    set((state) => ({ isAdminSidebarOpen: !state.isAdminSidebarOpen })),
  setAdminSidebarOpen: (open) => set({ isAdminSidebarOpen: open }),
}));
