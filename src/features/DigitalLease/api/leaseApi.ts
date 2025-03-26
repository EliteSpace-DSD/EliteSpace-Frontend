import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface TenantLeaseData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  startDate: string;
  endDate: string;
  monthlyRate: number;
  signature: boolean;
  status: string;
  message?: string;
}

type signBodyParams = {
  leaseId: string;
  signature: string;
};
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const leaseApi = createApi({
  reducerPath: 'leaseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getLease: builder.query<TenantLeaseData, void>({
      query: () => ({
        url: '/leases/view',
        method: 'GET',
      }),
    }),
    signLease: builder.mutation({
      query: ({ leaseId, signature }: signBodyParams) => ({
        url: '/leases/sign',
        method: 'POST',
        body: { leaseId, signature },
      }),
    }),
  }),
});

export const { useGetLeaseQuery, useSignLeaseMutation } = leaseApi;
