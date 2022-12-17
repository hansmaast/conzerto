import create from "zustand";

export const useMenuState = create((set, get) => ({
  // used to identify which menu is open
  name: null,
  setMenu: (name) => {
    // if the menu is already open, close it
    if (get().name === name) {
      set({ name: null });
      return;
    }
    set({ name });
  },
}));
