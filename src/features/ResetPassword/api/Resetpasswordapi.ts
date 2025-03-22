import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const resetPasswordApi = createApi({
  reducerPath: 'resetPasswordApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    updatePassword: builder.mutation<void, { newPassword: string }>({
      query: (body) => ({
        url: '/auth/update-password',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      }),
    }),
  }),
});

export const { useUpdatePasswordMutation } = resetPasswordApi;
