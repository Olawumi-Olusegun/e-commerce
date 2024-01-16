
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

            let tempState = [...state.cartItems];

            const findIndex = tempState.findIndex((item) => item.id === cartItem.id);

            if(findIndex >= 0) {
                tempState[findIndex].quantity += 1;
            }

            cartItem.quantity = 1;
            tempState.push(cartItem);

            return { cartItems: tempState };
        });
        
    },

    removeFromCart(id) {
        
        set((state) => {

            if(state.cartItems.length === 0) {
                return state;
            }

            let tempState = [...state.cartItems];
            const findIndex = tempState.findIndex((item) => item.id === id);
            if(findIndex >= 0) {
                const newProduct = tempState.splice(findIndex, 1);
                return { cartItems: newProduct };
            }
            return state;
        })
    },

    incrementCart(id) {
        set((state) => {

            let tempState = [...state.cartItems];
            const findIndex = tempState.findIndex((item) => item.id === id);

            if(findIndex >= 0) {
                tempState[findIndex].quantity += 1;
                return {cartItems: tempState}
            }

            return state;
        })
    },
    decrementCart(id) {
        set((state) => {

            let tempState = [...state.cartItems];
            const findIndex = tempState.findIndex((item) => item.id === id);

            if(findIndex >= 0) {

                if(tempState[findIndex].quantity === 0) {
                    return { cartItems: tempState }
                }

                tempState[findIndex].quantity -= 1;
                return { cartItems: tempState };
            }

            return state;
        })
    },

    resetCart: () => set({cartItems: []}),
});