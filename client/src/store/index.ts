import { create } from "zustand";
import { ProductStore, createProductSlice } from "./createProductSlice";
import { SidebarStore, createSidebarSlice } from "./createSidebarSlice";

interface CombineStore extends ProductStore, SidebarStore {}


export const useCombinedStore = create<CombineStore>()((...set) => ({
    ...createProductSlice(...set),
    ...createSidebarSlice(...set),
}));