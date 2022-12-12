import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const sushiApi = createApi({
  reducerPath: 'sushiApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6396d95486d04c76338279f7.mockapi.io/' }),
  endpoints: (build) => ({
    getSushi: build.query({
      query: (limit = '') => `sushi?${limit ? `page=1&limit=${limit}` : ''}`,
    }),
  }),
});

export const { useGetSushiQuery } = sushiApi;
