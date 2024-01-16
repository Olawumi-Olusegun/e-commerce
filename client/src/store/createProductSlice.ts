import { StateCreator } from "zustand";
import { Product } from "../types";
import data from "../db/data";


export interface ProductStore {
    products: Product[];
    selectedCategory: string;
    query: string;
    value: string | null;
    handleButtonClick: (value: string) => void;
    updateValue: (newValue: string) => void;
}

export const createProductSlice: StateCreator<ProductStore> = (set) => ({
    products: [...data],
    selectedCategory: "",
    query: "",
    value: "",

    handleButtonClick: (value) => {

        let filteredProducts = [...data];
       
        if(value) {
            set({selectedCategory: value});
        }

        set((state) => {

            if(state.selectedCategory) {

                const selectedCategory = state.selectedCategory;

                filteredProducts = filteredProducts.filter((product: Product) =>  
                product.title === selectedCategory ||
                product.category === selectedCategory ||
                product.color === selectedCategory ||
                product.newPrice === selectedCategory ||
                product.company === selectedCategory
                );
                return { products: filteredProducts }
            }else if(!state.selectedCategory) {
                return { products: filteredProducts }
            }
            return state;
        });
    },

    updateValue: (newValue) => {

        if(newValue) {
            set({ query: newValue });
        }
      
        set((state) => {
            
        let filteredProducts = state.products;
        const filteredItems = data?.filter((product: Product) => product.title.toLowerCase().indexOf(newValue.toLowerCase()) !== -1);
        
        if(newValue !== null && newValue !== undefined && newValue !== "") {
            filteredProducts = filteredItems;
            return { products: filteredProducts }
        }
            return state;
        });
    },
});