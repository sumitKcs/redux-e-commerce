import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AnyARecord } from "dns";

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api`,
  }),
  tagTypes: [
    "Banner",
    "ProductGrid",
    "PeopleGrid",
    "Testimonials",
    "Product",
    "Orders",
    "Search",
  ],
  endpoints: (builder) => ({
    getBanner: builder.query<Banner[], void>({
      query: () => `/banner`,
      providesTags: ["Banner"],
    }),
    getProductGrid: builder.query<ProductGrid[], void>({
      query: () => `/productGrid`,
      providesTags: ["ProductGrid"],
    }),
    getPeopleGrid: builder.query<PeopleGrid[], void>({
      query: () => `/peopleGrid`,
      providesTags: ["PeopleGrid"],
    }),
    getTestimononials: builder.query<Testimonials[], void>({
      query: () => `/testimonials`,
      providesTags: ["Testimonials"],
    }),
    getProductBySlug: builder.query<Product[], string>({
      query: (slug) => `/products/${slug}`,
      providesTags: ["Product"],
    }),
    getAllProducts: builder.query<Product[], void>({
      query: () => `/allProducts`,
      providesTags: ["Product"],
    }),
  
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetBannerQuery,
  useGetProductGridQuery,
  useGetPeopleGridQuery,
  useGetTestimononialsQuery,
  useGetProductBySlugQuery,
  useGetAllProductsQuery,
} = apiSlice;
