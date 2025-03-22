import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Login = {
  email: string;
  password: string;
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }: Login) => ({
        url: '/auth/signin',
        method: 'POST',
        body: { email, password },
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
