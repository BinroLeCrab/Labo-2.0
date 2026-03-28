import { create } from "zustand";

export const useProps = create((set) => ({

    params: {
        minBrightness: 0.5,
        maxBrightness: 1,
        cellSize: 15,
        gap: 0,
        color: "#ffffff",
        asciiMode: "classic",
        asciiContrast: false,
        medianBrightness: 5,
    },

    setMinBrightness: (value) => set({ params: { ...state.params, minBrightness: value } }),
    setMaxBrightness: (value) => set({ params: { ...state.params, maxBrightness: value } }),
    setCellSize: (value) => set({ params: { ...state.params, cellSize: value } }),
    setGap: (value) => set({ params: { ...state.params, gap: value } }),
    setColor: (value) => set({ params: { ...state.params, color: value } })

}));