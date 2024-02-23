import { createSlice } from "@reduxjs/toolkit";
import UserModel from "../../interfaces/UserModel";

export const initialUserState: UserModel = {
    fullName: "",
    id: "",
    email: "",
    role: ""
};

export const userAuthSlice = createSlice({
    name: "userAuth",
    initialState: initialUserState,
    reducers: {
        setLoggedInUser: (state, action) => {
            state.id = action.payload.id;
            state.fullName = action.payload.fullName;
            state.email = action.payload.email;
            state.role = action.payload.role;
        }
    }
});

export const { setLoggedInUser } = userAuthSlice.actions;
export const userAuthReducer = userAuthSlice.reducer;