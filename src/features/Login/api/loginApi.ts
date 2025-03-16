import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Login = {
  email: string;
  password: string;
};

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/',
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }: Login) => ({
        url: 'auth/signin',
        method: 'POST',
        body: { email, password },
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
