import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const paymentApi = createApi({
    reducerPath: "paymentApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_API_URL}/api`
    }),
    endpoints: (builder) => ({
        initiatePayment: builder.mutation({
            query: (userId) => ({
                url: "payment",
                method: "POST",
                params: {
                    userId: userId
                }
            })
        })
    })
});

export const { useInitiatePaymentMutation } = paymentApi;
export default paymentApi;