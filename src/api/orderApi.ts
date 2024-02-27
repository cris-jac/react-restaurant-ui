import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const orderApi = createApi({
    reducerPath: "orderApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_API_URL}/api`
    }),
    tagTypes: ["Orders"],
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (orderDetails) => ({
                url: "orders",
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: orderDetails
            }),
            invalidatesTags: ["Orders"]
        }),
        getOrders: builder.query({
            query: (userId) => ({
                url: "orders",
                params: {
                    userId: userId
                }
            }),
            providesTags: ["Orders"]
        }),
        getAllOrders: builder.query({
            query: () => ({
                url: "orders"
            })
        }),
        getOrder: builder.query({
            query: (id) => ({
                url: `orders/${id}`
            }),
            providesTags: ["Orders"]
        })
    })
});

export const { useCreateOrderMutation, useGetOrderQuery, useGetOrdersQuery, useGetAllOrdersQuery } = orderApi;
export default orderApi;