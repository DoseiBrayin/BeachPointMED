import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = import.meta.env.VITE_BEACHPOINT_API_URL
const API_TOKEN = import.meta.env.VITE_BEACHPOINT_API_TOKEN

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      // Si tienes un token de API, añádelo a los headers
      if (API_TOKEN) {
        headers.set('Authorization', `Bearer ${API_TOKEN}`)
      }
      return headers
    }
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => ({
        url: '/user/login',
        method: 'POST',
        body
      })
    }),
    registerUser: builder.mutation({
      query: (body) => ({
        url: '/user/create',
        method: 'POST',
        body
      })
    })
  })
})

export const { useLoginUserMutation, useRegisterUserMutation } = authApi
