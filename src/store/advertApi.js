import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


export const advertApi = createApi({
    reducerPath: "advertApi",
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_WEB_API_URL}`}),
    refetchOnReconnect: true,
    tagTypes: ["Adverts"],
    endpoints: (build) => ({
        getAdverts: build.query({
            query: (args) => {
                const params = new URLSearchParams();
                if (args) {
                    args.categoryId && params.append("categoryId", String(args.categoryId));
                    args.cityId && params.append("city", String(args.cityId));
                }
                return `donation/?${params}`
            },
            providesTags: result => ["Adverts"]
        }),
    })
});
