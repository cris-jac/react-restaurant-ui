import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userAuthApi = createApi({
    reducerPath: "userAuthApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_API_URL}/api`,
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (userData) => ({
                url: "auth/register",
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: userData
            })
        }),
        loginUser: builder.mutation({
            query: (userCredentials) => ({
                url: "auth/login",
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: userCredentials
            })
        })
    })
});

export const { useRegisterUserMutation, useLoginUserMutation } = userAuthApi;
export default userAuthApi;