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
        getOrder: builder.query({
            query: (id) => ({
                url: `order/${id}`
            }),
            providesTags: ["Orders"]
        })
    })
});

export const { useCreateOrderMutation } = orderApi;
export default orderApi;