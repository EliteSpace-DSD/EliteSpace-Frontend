import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface User {
  message: string;
}
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),

  endpoints: (builder) => ({
    // Define the shape of the data returned by this endpoint
    getAllUsers: builder.query<User, void>({
      //Calls the endpoint at http://localhost:3000/api/ping
      query: () => `ping`,
    }),
  }),
});

export const { useGetAllUsersQuery } = userApi;
