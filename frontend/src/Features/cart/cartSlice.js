import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartArray: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem
        ("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem : (state, action) => {
           const itemIndex = state.cartArray.findIndex(
                (item) => item.id === action.payload.id
            );
            if(itemIndex >= 0){
                state.cartArray[itemIndex].cartQuantity += 1;
                toast.info(`increased ${state.cartArray[itemIndex].name} cart quantity`, {
                    position: "bottom-left",
                });
            } else {
                const tempProduct = {...action.payload, cartQuantity : 1};
                state.cartArray.push(tempProduct);
                toast.success(`${action.payload.name} has been added to your cart.`, {
                    position: "bottom-left",
                });
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartArray));

        },
        removeFromCart : (state, action) => {
            // ...state
            let index = state.cartArray.indexOf(action.payload);
            state.quantity -= 1;
            state.cartArray.splice(index, 1)
        },
        getCartQuantity : (state) => {
            return state.quantity;
        },
        increaseCartQuantity : (state, action) => {
            console.log("increase Cart item action payload:",action.payload);
            console.log("increase Cart Item state.cartArray:", state.cartArray);
            state.cartTotalQuantity = state.cartTotalAmount + 1
            console.log(state.cartTotalAmount, "New total")
            // if (state.cartArray.find(item => item.id === action.payload) == null){
            //     return [ ...state.cartArray, {action , quantity: 1}]
            // } else {
            //     return state.cartArray.map(item => {
            //         if( item.id === action.payload){
            //             return {...item, quantity: item.quantity + 1}
            //         } else {
            //             return item
            //         }
            //     })
            // }
        }
    }
});


export const cartReducer = cartSlice.reducer;

export const { addCartItem } = cartSlice.actions;
export const { removeFromCart } = cartSlice.actions;
export const { increaseCartQuantity} = cartSlice.actions;


export const selectAllCartItems = (state) => {
    // console.log(state)
    return state.cart.cartArray;
}