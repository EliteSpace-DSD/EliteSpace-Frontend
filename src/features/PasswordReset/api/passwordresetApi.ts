import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const passwordResetApi = createApi({
  reducerPath: 'passwordResetApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: (builder) => ({
    resetPassword: builder.mutation({
      query: (email: string) => ({
        url: '/auth/forgot-password',
        method: 'POST',
        body: { email },
      }),
    }),
  }),
});

export const { useResetPasswordMutation } = passwordResetApi;
