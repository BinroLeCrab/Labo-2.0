import { create } from "zustand";

export const useProps = create((set) => ({

    minBrightness: 0.5,
    maxBrightness: 1,
    cellSize: 15,
    gap: 0,
    color: "white",

    setMinBrightness: (value) => set({ minBrightness: value }),
    setMaxBrightness: (value) => set({ maxBrightness: value }),
    setCellSize: (value) => set({ cellSize: value }),
    setGap: (value) => set({ gap: value }),
    setColor: (value) => set({ color: value })
    
}));