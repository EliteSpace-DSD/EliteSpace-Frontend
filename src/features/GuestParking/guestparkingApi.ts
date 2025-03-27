import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type ParkingInfo = {
  guestName: string;
  licensePlate: string;
  parkingId: number;
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const guestParkingApi = createApi({
  reducerPath: 'guestParkingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    submitParkingInfo: builder.mutation({
      query: ({ guestName, licensePlate, parkingId }: ParkingInfo) => ({
        url: '/parking',
        method: 'POST',
        body: { guestName, licensePlate, parkingId },
      }),
    }),
    getParkingSpaces: builder.query({
      query: () => ({
        url: '/parking',
        method: 'GET',
      }),
    }),
  }),
});

export const { useSubmitParkingInfoMutation, useGetParkingSpacesQuery } = guestParkingApi;
