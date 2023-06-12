import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
    "Menu",
    "Categories",
    "Deals",
    "Brands",
    "Prices",
    "Orders",
    "Banner Category",
    "Banner Brands",
    "Banner Price",
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
      query: () => `/products`,
      providesTags: ["Product"],
      transformResponse: (response: any) =>
        response.map((product: any) => ({ ...product, cartQuantity: 0 })),
    }),
    getMenu: builder.query<[], void>({
      query: () => `/menu`,
      providesTags: ["Menu"],
    }),
    getCategories: builder.query<any, void>({
      query: () => `/categories`,
      providesTags: ["Categories"],
    }),
    getDeals: builder.query<string[], void>({
      query: () => `/deals`,
      providesTags: ["Deals"],
    }),
    getBrands: builder.query<any, void>({
      query: () => `/brands`,
      providesTags: ["Brands"],
    }),
    getPrices: builder.query<any, void>({
      query: () => `/prices`,
      providesTags: ["Prices"],
    }),
    getOrders: builder.query<any, void>({
      query: () => `/orders`,
      providesTags: ["Orders"],
    }),
    getCategoryBanners: builder.query<any, void>({
      query: () => `/bannerCategory`,
      providesTags: ["Banner Category"],
    }),
    getBrandBanners: builder.query<any, void>({
      query: () => `/bannerBrands`,
      providesTags: ["Banner Brands"],
    }),
    getPriceBanners: builder.query<any, void>({
      query: () => `/bannerPrice`,
      providesTags: ["Banner Price"],
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
  useGetMenuQuery,
  useGetCategoriesQuery,
  useGetDealsQuery,
  useGetBrandsQuery,
  useGetPricesQuery,
  useGetOrdersQuery,
  useGetCategoryBannersQuery,
  useGetBrandBannersQuery,
  useGetPriceBannersQuery,
} = apiSlice;
