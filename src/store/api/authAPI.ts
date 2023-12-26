import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/auth' }),
    endpoints: (builder) => ({
        authUser: builder.query<{ user: UserCredentials }, null>({
            query: () => ''
        })
    })
})

export const { useAuthUserQuery } = authAPI