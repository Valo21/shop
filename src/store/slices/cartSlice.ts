import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
    products: CartProduct[]
} = {
    products: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<CartProduct>) {
            state.products.push(action.payload)
        },
        removeProduct(state, action: PayloadAction<CartProduct>) {
            state.products.unshift(action.payload)
        }
    }
})

export const { addProduct, removeProduct } = cartSlice.actions
export default cartSlice