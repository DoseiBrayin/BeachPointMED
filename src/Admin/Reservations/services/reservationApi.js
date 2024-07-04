import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = import.meta.env.VITE_BEACHPOINT_API_URL
const API_TOKEN = import.meta.env.VITE_BEACHPOINT_API_TOKEN

export const adminReservationApi = createApi({
  reducerPath: 'adminReservationsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      if (API_TOKEN) {
        headers.set('Authorization', `Bearer ${API_TOKEN}`)
      }
      return headers
    }
  }),
  endpoints: (builder) => ({
    getReservations: builder.query({
      query: () => 'locations/locations',
      providesTags: ['Reservations']
    })
  })
})

export const { useGetReservationsQuery } = adminReservationApi
