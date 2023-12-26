import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "@prisma/client";

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/products' }),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], null>({
            query: () => ''
        }),
        getProductById: builder.query<Product, string | string[]>({
            query: (id) => `${id}`
        })
    })
})

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi