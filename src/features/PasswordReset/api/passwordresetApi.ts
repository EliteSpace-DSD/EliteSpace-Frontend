import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const passwordResetApi = createApi({
  reducerPath: 'passwordResetApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/',
  }),
  endpoints: (builder) => ({
    resetPassword: builder.mutation({
      query: (email: string) => ({
        url: 'auth/forgot-password',
        method: 'POST',
        body: { email },
      }),
    }),
  }),
});

export const { useResetPasswordMutation } = passwordResetApi;