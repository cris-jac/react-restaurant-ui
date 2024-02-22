import { createSlice } from "@reduxjs/toolkit"
import { ShoppingCartModel } from "../../interfaces";

const initialState: ShoppingCartModel = {
    cartItems: []
}

const shoppingCartSlice = createSlice({
    name: "CartItems",
    initialState: initialState,
    reducers: {
        setShoppingCart: (state, action) => {
            state.cartItems = action.payload;
        },
        // 
        updateQuantity: (state, action) => {
            state.cartItems = state.cartItems?.map((item) => {
                // If there is an item id
                if (item.id === action.payload.cartItem.id) {
                    // Modifies the quantity
                    // item.quantity = action.payload.quantity;
                    return {
                        ...item,
                        quantity: action.payload.quantity
                    }
                }
                // If not / after the quantity is modified it proceeds
                return item;
            })
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems?.filter((item) => {
                // // Check if this id exists
                // if (item.id === action.payload.cartItems.id) {
                //     // Returns null where this item should be
                //     return null;
                // }  
                // // It proceeds
                // return item;
                item.id !== action.payload.cartItem.id
            })
        }
    }
});

export const { setShoppingCart, updateQuantity, removeFromCart } = shoppingCartSlice.actions;
export const shoppingCartReducer = shoppingCartSlice.reducer;
