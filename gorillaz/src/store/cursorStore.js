import { create } from "zustand";

export const useCursor = create((set) => ({
    hovered: null,
	updateHovered: (element) => {
        set({ hovered: element })
        console.log(element);
    },
}));
