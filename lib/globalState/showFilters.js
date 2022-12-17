import create from "zustand";

export const useShowFilters = create((set) => ({
  shows: [],
  setShows: (shows) => set({ shows }),
  scene: "alle",
  setScene: (scene) => set({ scene }),
  sceneOptions: [],
  setSceneOptions: (sceneOptions) => set({ sceneOptions }),
  dateOption: "all",
  setDateOption: (dateOption) => set({ dateOption }),
}));
