import { create } from "zustand";

export const useProps = create((set) => ({

    params: {
        invertBrightness: false,
        minBrightness: 0.5,
        maxBrightness: 1,
        cellSize: 15,
        gap: 0,
        colorMode: "monochrome",
        color: "#ffffff",
        boostBrightness: 0,
        asciiMode: "classic",
        asciiContrast: false,
        medianBrightness: 5,
        showVideo: true,
        bgColor: "#10131d",
        bgBlur: 0,
    },

    setMinBrightness: (value) => set((state) => ({ params: { ...state.params, minBrightness: value } })),
    setMaxBrightness: (value) => set((state) => ({ params: { ...state.params, maxBrightness: value } })),
    setCellSize: (value) => set((state) => ({ params: { ...state.params, cellSize: value } })),
    setGap: (value) => set((state) => ({ params: { ...state.params, gap: value } })),
    setColor: (value) => set((state) => ({ params: { ...state.params, color: value } })),
    setShowVideo: (value) => set((state) => ({ params: { ...state.params, showVideo: value } })),
    setBackgroundColor: (value) => set((state) => ({ params: { ...state.params, bgColor: value } })),
    setBackgroundBlur: (value) => set((state) => ({ params: { ...state.params, bgBlur: value } })),
}));