import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selected: 'all',
  search: '',
  status: '',
  users: [],
  error: null,
  userById: null
}

export const userAdminSlice = createSlice({
  name: 'userAdmin',
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
    },
    setUserById: (state, action) => {
      state.userById = action.payload
    }
  }
})

export const selectUserFiltersAdmin = (state) => state.userFiltersAdmin

export const { changeFilter, onSearch, setUserById } = userAdminSlice.actions

export default userAdminSlice.reducer
