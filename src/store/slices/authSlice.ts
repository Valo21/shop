import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
    user: null | UserCredentials
} = {
    user: null
}

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials(state, action: PayloadAction<UserCredentials>) {
            state.user = action.payload
        },
        removeProduct(state, action: PayloadAction<UserCredentials>) {

        }
    }
})

export const { setCredentials } = userSlice.actions
export default userSlice