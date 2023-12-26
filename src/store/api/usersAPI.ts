import { User } from "@prisma/client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/users' }),
    endpoints: (builder) => ({
        getUserById: builder.query<User, string>({
            query: (id) => '/' + id
        })
    })
})

export const { useGetUserByIdQuery } = usersAPI