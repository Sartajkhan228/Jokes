import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const jokesSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://v2.jokeapi.dev/joke' }),
    endpoints: (builder) => ({
        getJokes: builder.query({
            query: () => (
                '/any'
            )
        }),
    }),
})

export const { useGetJokesQuery } = jokesSlice;