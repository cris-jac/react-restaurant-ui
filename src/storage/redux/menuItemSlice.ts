import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    menuItems: []
}

const menuItemSlice = createSlice({
    name: "MenuItems",
    initialState: initialState,
    reducers: {
        setMenuItems: (state, action) => {
            state.menuItems = action.payload;
        }
    }
});

export const { setMenuItems } = menuItemSlice.actions;
export const menuItemReducer = menuItemSlice.reducer;