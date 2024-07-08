import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

const today = dayjs().format('YYYY-MM-DD')
const initialState = {
  filterByDay: today,
  filterByLocation: 'all',
  reservation: {},
  usuario: {}
}

const reservationSlice = createSlice({
  name: 'adminReservation',
  initialState,
  reducers: {
    setDay: (state, action) => {
      const day = action.payload
      state.filterByDay = day
    }
  }
})

export default reservationSlice.reducer

export const {
  setDay
} = reservationSlice.actions
