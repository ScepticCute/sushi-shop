import { ISushi } from './../models/ISushi';
import { IFilter } from './../models/IFilter';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const sushiApi = createApi({
  reducerPath: 'sushiApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6396d95486d04c76338279f7.mockapi.io/' }),
  endpoints: (build) => ({
    getSushi: build.query<ISushi[], IFilter>({
      query: ({ limit = 8, sort = { sort: 'rating' }, order = 'desc', page = 1, category = '' }) =>
        `sushi?limit=${limit}&sortBy=${sort.sort}&order=${order}&page=${page}${
          category ? `&category=${category}` : ''
        }`,
    }),
    getSushiById: build.query<ISushi[], number>({
      query: (id) => `sushi?id=${id}`,
    }),
  }),
});

export const { useGetSushiQuery } = sushiApi;
