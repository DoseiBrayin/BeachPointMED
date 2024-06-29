import { useDispatch, useSelector } from 'react-redux'
import { setShowModal } from '../reservationsSlice'

export const useReservationActions = () => {
  const dispatch = useDispatch()
  const reservationState = useSelector(state => state.adminReservations)
  const showModalAction = (isShow) => {
    dispatch(setShowModal(isShow))
  }

  return { showModalAction, reservationState }
}
