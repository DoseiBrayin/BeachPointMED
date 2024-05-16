import { useAxios } from '../../API/useAxios'

export const useProducts = () => {
  const url = import.meta.env.VITE_BEACHPOINT_API_URL
  const { data, loading, error } = useAxios({ url: `${url}products/` })

  return {
    data,
    loading,
    error
  }
}
