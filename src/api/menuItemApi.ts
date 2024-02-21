import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const menuItemApi = createApi({
    reducerPath: "menuItemApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5277/api/"
    }),
    tagTypes: ["MenuItems"],
    endpoints: (builder) => ({
        getMenuItems: builder.query({
            query: () => ({
                url: "menuItems"
            }),
            providesTags: ["MenuItems"]
        }),
        getMenuItem: builder.query({
            query: (id) => ({
                url: `menuItems/${id}`
            }),
            providesTags: ["MenuItems"]
        })
    })
});

export const { useGetMenuItemsQuery, useGetMenuItemQuery } = menuItemApi;
export default menuItemApi;