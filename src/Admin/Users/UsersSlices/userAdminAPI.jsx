import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = import.meta.env.VITE_BEACHPOINT_API_URL
const API_TOKEN = import.meta.env.VITE_BEACHPOINT_API_TOKEN

export const userAdminAPI = createApi({
  reducerPath: 'usersAdminAPI',
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
    getUsers: builder.query({
      query: () => 'user',
      providesTags: ['Users']
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: 'user/create',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Users']
    })
  })
})

export const { useGetUsersQuery, useCreateUserMutation } = userAdminAPI
