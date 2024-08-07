import axios from 'axios'

export async function fetchInstagram() {
  const token = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN
  try {
    const response = await axios.get('https://graph.instagram.com/me/media', {
      params: {
        fields: 'media_type,media_url',
        access_token: token
      }
    })
    return response
  } catch (error) {
    console.error(error) // Imprime el error completo
  }
};