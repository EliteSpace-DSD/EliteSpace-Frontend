import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface User {
  message: string;
}
interface Complaint {
  selectedIssue: string;
  extraDetails?: string;
  img?: string;
}
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
    credentials: "include",
  }),

  endpoints: (builder) => ({
    // Remove
    getAllUsers: builder.query<User, void>({
      //Calls the endpoint at http://localhost:3000/api/ping
      query: () => `ping`,
    }),
    sendComplaint: builder.mutation({
      query: (complaint: Complaint) => ({
        url: `/complaints/submit-complaint`,
        method: "POST",
        body: complaint,
      }),
    }),
  }),
});

export const { useGetAllUsersQuery, useSendComplaintMutation } = userApi;
