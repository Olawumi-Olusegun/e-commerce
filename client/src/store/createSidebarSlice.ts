import { StateCreator } from "zustand";


export interface SidebarStore {
    openSideMenu: boolean;
    setOpenSideMenu: (isOpen: boolean) => void;
}


export const createSidebarSlice: StateCreator<SidebarStore> = (set) => ({
    openSideMenu: false,
    setOpenSideMenu: (isOpen) => {
        set((state) => {
            return { openSideMenu: isOpen }
        })
        
    },
});