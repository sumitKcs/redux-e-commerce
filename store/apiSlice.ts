import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api`
  }),
  tagTypes: ['Banner', 'ProductGrid', 'PeopleGrid'],
  endpoints: (builder) => ({
    getBanner: builder.query<Banner[], void>({
      query: () => `/banner`,
      providesTags: ['Banner'],
   
    }),
    getProductGrid: builder.query<ProductGrid[], void>({
      query: () => `/productGrid`,
      providesTags: ['ProductGrid'],
    }),
    getPeopleGrid: builder.query<PeopleGrid[], void>({
      query: () => `/peopleGrid`,
      providesTags: ['PeopleGrid'],
    })
    
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBannerQuery, useGetProductGridQuery, useGetPeopleGridQuery } = apiSlice