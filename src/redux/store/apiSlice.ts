import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }), // Update with backend URL
  endpoints: (builder) => ({
    getListings: builder.query({
      query: () => "/listings",
    }),
  }),
});

export const { useGetListingsQuery } = api;
