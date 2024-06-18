import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { token } = action.payload
      localStorage.setItem('user', JSON.stringify({ token }))
      state.token = token
    },
    logout: (state) => {
      localStorage.clear()
      state.token = null
    }
  }
})

export const selectAuth = (state) => state.auth

export const { setUser, logout } = authSlice.actions

export default authSlice.reducer
