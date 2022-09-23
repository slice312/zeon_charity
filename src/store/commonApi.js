import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


export const commonApi = createApi({
    reducerPath: "commonApi",
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_WEB_API_URL}`}),
    refetchOnReconnect: true,
    tagTypes: ["Categories", "Cities"],
    endpoints: (build) => ({
        getCategories: build.query({
            query: () => {
                return "category/"
            },
            providesTags: result => ["Categories"]
        }),

        getCities: build.query({
            query: () => {
                return "cities/"
            },
            providesTags: result => ["Cities"]
        }),
    })
});
