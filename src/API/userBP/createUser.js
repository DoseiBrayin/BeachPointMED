import axios from 'axios'

export const createUser = async (user) => {
  const API_URL = import.meta.env.VITE_BEACHPOINT_API_URL
  const beare = import.meta.env.VITE_BEACHPOINT_API_TOKEN
  try {
    const response = await axios.post(`${API_URL}user/create`, user, {
      headers: {
        Authorization: `Bearer ${beare}`
      }
    })
    return response.status === 500 ? false : response.data
  } catch (error) {
    return error
  }
}
