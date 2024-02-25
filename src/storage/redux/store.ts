import { configureStore } from "@reduxjs/toolkit";
import { menuItemReducer } from "./menuItemSlice";
import { menuItemApi, paymentApi, shoppingCartApi, userAuthApi } from "../../api";
import { shoppingCartReducer } from "./cartItemSlice";
import { userAuthReducer } from "./userAuthSlice";
import orderApi from "../../api/orderApi";

const store = configureStore({
    reducer: {
        menuItemStore: menuItemReducer,
        shoppingCartStore: shoppingCartReducer,
        userAuthStore: userAuthReducer,
        [menuItemApi.reducerPath]: menuItemApi.reducer,
        [shoppingCartApi.reducerPath]: shoppingCartApi.reducer,
        [userAuthApi.reducerPath]: userAuthApi.reducer,
        [paymentApi.reducerPath]: paymentApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(menuItemApi.middleware)
        .concat(shoppingCartApi.middleware)
        .concat(userAuthApi.middleware)
        .concat(paymentApi.middleware)
        .concat(orderApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;

export default store;