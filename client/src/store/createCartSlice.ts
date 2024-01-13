
import { StateCreator } from "zustand";

export interface Product {
    id: string;
    title: string;
    size: string;
    color: string;
    price: number;
}

export interface CartStore {
    products: Product[],
    cartItems: Product[] | [];
    addToCart: (cartItems: Product) => void;
    removeFromCart: (id: string) => void;
    resetCart: () => void;
}

export const createCartSlice: StateCreator<CartStore> = (set, get) => ({
    products: [{
        id: "",
        title: "",
        size: "",
        color: "",
        price: 0,
    }],
    cartItems: [],
    addToCart(cartItem) {
        set((state) => {
            if(state.cartItems.length === 0) {
                return state;
            }
            const tempState = [...state.products, cartItem];
            return { products: tempState };
        });
        
    },

    removeFromCart(id) {
        
        set((state) => {

            if(state.cartItems.length === 0) {
                return state;
            }

            const tempState = [...state.products];
            const findIndex = tempState.findIndex((item) => item.id === id);
            if(findIndex > 0) {
                const newProduct = tempState.splice(findIndex, 1);
                return { products: newProduct };
            }
            return state;
        })
    },

    resetCart() {
        set({cartItems: []})
    },

})