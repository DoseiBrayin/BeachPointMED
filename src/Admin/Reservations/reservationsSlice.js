import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

const today = dayjs().format('YYYY-MM-DD')
const initialState = {
  filteredReservations: [],
  today
}

const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    setShowModal: (state, action) => {
      state.showModal = action.payload
    }
  }
})

export default reservationSlice.reducer

export const {
  setShowModal
} = reservationSlice.actions
