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
    }
  }
})

export const selectAuth = (state) => state.auth

export const { setUser } = authSlice.actions

export default authSlice.reducer
