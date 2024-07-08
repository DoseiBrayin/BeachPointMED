import axios from 'axios'

export const getUsers = async () => {
  const API_URL = import.meta.env.VITE_BEACHPOINT_API_URL
  const beare = import.meta.env.VITE_BEACHPOINT_API_TOKEN

  const response = await axios.get(`${API_URL}user`, {
    headers: {
      headers: {
        Authorization: `Bearer ${beare}`
      }
    }
  })
  return response.data
}
