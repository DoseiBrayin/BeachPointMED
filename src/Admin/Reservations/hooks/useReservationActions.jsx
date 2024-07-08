import { useDispatch, useSelector } from 'react-redux'
import { setDay } from '../services/reservationsSlice'

export const useReservationActions = () => {
  const dispatch = useDispatch()
  const reservationState = useSelector(state => state.adminReservations)
  const setFilterDay = (day) => {
    dispatch(setDay(day))
  }

  return { reservationState, setFilterDay }
}
