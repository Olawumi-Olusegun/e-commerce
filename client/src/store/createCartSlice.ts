
import { StateCreator } from "zustand";

export interface Product {
    id: string;
    title: string;
    size: string;
    color: string;
    price: number;
    quantity: number;
}

export interface CartStore {
    cartItems: Product[] | [];
    addToCart: (cartItem: Product) => void;
    removeFromCart: (id: string) => void;
    incrementCart: (id: string) => void;
    decrementCart: (id: string) => void;
    resetCart: () => void;
}

export const createCartSlice: StateCreator<CartStore> = (set) => ({
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems") || "[]" ) : [],
    addToCart(cartItem) {
        set((state) => {

            let copiedCartItems = [...state.cartItems];

            const findIndex = copiedCartItems.findIndex((item) => item.id === cartItem.id);

            if(findIndex >= 0) {
                copiedCartItems[findIndex].quantity += 1;
            }

            cartItem.quantity = 1;
            copiedCartItems.push(cartItem);

            return { cartItems: copiedCartItems };
        });
        
    },

    removeFromCart(id) {
        
        set((state) => {

            if(state.cartItems.length === 0) {
                return state;
            }

            let copiedCartItems = [...state.cartItems];
            const findIndex = copiedCartItems.findIndex((item) => item.id === id);
            if(findIndex >= 0) {
                const newProduct = copiedCartItems.splice(findIndex, 1);
                state.cartItems = newProduct;
                // return { cartItems: newProduct };
            }
            return state;
        })
    },

    incrementCart(id) {
        set((state) => {

            let copiedCartItems = [...state.cartItems];
            const findIndex = copiedCartItems.findIndex((item) => item.id === id);

            if(findIndex >= 0) {
                copiedCartItems[findIndex].quantity += 1;
                state.cartItems = copiedCartItems;
                // return {cartItems: copiedCartItems}
            }

            return state;
        })
    },
    decrementCart(id) {
        set((state) => {

            let copiedCartItems = [...state.cartItems];
            const findIndex = copiedCartItems.findIndex((item) => item.id === id);

            if(findIndex >= 0) {

                if(copiedCartItems[findIndex].quantity === 0) {
                    return state;
                }

                copiedCartItems[findIndex].quantity -= 1;
                state.cartItems = copiedCartItems;
            }

            return state;
        })
    },

    resetCart: () => set({ cartItems: [] }),
});