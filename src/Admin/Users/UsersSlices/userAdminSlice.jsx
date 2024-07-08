import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selected: 'all',
  search: '',
  status: '',
  users: [],
  error: null
}

export const userAdminSlice = createSlice({
  name: 'userFiltersAdmin',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.selected = action.payload
      state.users = state.users.filter((user) => {
        if (state.selected === 'all') return user
        return user.type_rol === state.selected
      }
      )
    },
    onSearch: (state, action) => {
      state.search = action.payload
    }
  }
})

export const selectUserFiltersAdmin = (state) => state.userFiltersAdmin

export const { changeFilter, onSearch } = userAdminSlice.actions

export default userAdminSlice.reducer
