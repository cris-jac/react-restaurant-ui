import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const shoppingCartApi = createApi({
    reducerPath: "shoppingCartApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_API_URL}/api`
    }),
    tagTypes: ["ShoppingCart"],
    endpoints: (builder) => ({
        // Get by UserId
        getShoppingCart: builder.query({
            query: (userId) => ({
                url: 'shoppingCart',
                params: {
                    userId: userId
                }
            }),
            providesTags: ["ShoppingCart"]
        }),
        // Update cart
        updateShoppingCart: builder.mutation({
            query: ({ menuItemId, updateQuantityBy, userId }) => ({
                url: 'shoppingCart',
                method: "POST",
                params: {
                    menuItemId,
                    updateQuantityBy, 
                    userId
                }
            }),
            invalidatesTags: ["ShoppingCart"]
        })
    })
});

export const { useGetShoppingCartQuery, useUpdateShoppingCartMutation } = shoppingCartApi;
export default shoppingCartApi;