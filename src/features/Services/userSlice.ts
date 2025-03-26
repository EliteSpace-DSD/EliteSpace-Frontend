import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface User {
  message: string;
}
interface Complaint {
  selectedIssue: {
    subCategory: string;
    category: string;
    priority: string;
  };
  extraDetails?: string;
  img?: string;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    credentials: 'include',
  }),

  endpoints: (builder) => ({
    // Remove
    getAllUsers: builder.query<User, void>({
      //Calls the endpoint at API_BASE_URL/api/ping
      query: () => `ping`,
    }),
    sendComplaint: builder.mutation({
      query: (complaint: Complaint) => ({
        url: `/complaints/submit-complaint`,
        method: 'POST',
        body: complaint,
      }),
    }),
  }),
});

export const { useGetAllUsersQuery, useSendComplaintMutation } = userApi;
