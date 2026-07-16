import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const mainEndPoint = 'products';
export const productsApi = createApi({
    reducerPath:'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
    endpoints: (builder)=>({
        getProducts: builder.query({
            query : () => mainEndPoint
        }),
        getCategories: builder.query({
            query : () => `${mainEndPoint}/categories`
        }),
        getSingleCategory: builder.query({
            query : (categoryName) => `${mainEndPoint}/category/${categoryName}`
        }),
    }),
})

export const {useGetProductsQuery,useGetCategoriesQuery,useGetSingleCategoryQuery} = productsApi