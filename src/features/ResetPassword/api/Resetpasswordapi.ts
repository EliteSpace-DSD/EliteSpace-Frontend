import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const resetPasswordApi = createApi({
  reducerPath: 'resetPasswordApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    updatePassword: builder.mutation<void, { newPassword: string }>({
      query: (body) => ({
        url: 'auth/update-password',
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