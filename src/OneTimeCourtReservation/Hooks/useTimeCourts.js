import { useParams } from 'react-router-dom'
import { useAxios } from '../../API/useAxios'

export const useTimeCourts = (day) => {
  const url = import.meta.env.VITE_BEACHPOINT_API_URL
  const { locationId } = useParams()
  const { data, loading, error } = useAxios({ url: `${url}timeCourts/timeCourts/${day}/${locationId}` })

  return {
    data,
    loading,
    error,
    locationId
  }
}
