import { configureStore } from "@reduxjs/toolkit";
import { menuItemReducer } from "./menuItemSlice";
import { menuItemApi, shoppingCartApi, userAuthApi } from "../../api";
import { shoppingCartReducer } from "./cartItemSlice";
import { userAuthReducer } from "./userAuthSlice";

const store = configureStore({
    reducer: {
        menuItemStore: menuItemReducer,
        shoppingCartStore: shoppingCartReducer,
        userAuthStore: userAuthReducer,
        [menuItemApi.reducerPath]: menuItemApi.reducer,
        [shoppingCartApi.reducerPath]: shoppingCartApi.reducer,
        [userAuthApi.reducerPath]: userAuthApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(menuItemApi.middleware)
        .concat(shoppingCartApi.middleware)
        .concat(userAuthApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;

export default store;