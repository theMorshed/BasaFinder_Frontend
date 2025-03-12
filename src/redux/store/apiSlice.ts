import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://basafinderbackend.vercel.app/api" }), // Update with backend URL
  endpoints: (builder) => ({
    getListings: builder.query({
      query: () => "/listings",
    }),
  }),
});

export const { useGetListingsQuery } = api;
