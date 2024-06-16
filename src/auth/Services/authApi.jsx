import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_TOKEN = import.meta.env.VITE_BEACHPOINT_API_TOKEN

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000'
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => ({
        url: '/user/login',
        method: 'POST',
        body
      })
    })
  })
})

export const { useLoginUserMutation } = authApi
