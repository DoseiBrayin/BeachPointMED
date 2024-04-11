import { fetchInstagram } from '../../API/instagram/instagram'
import { useEffect, useState } from 'react'

export function useInstagram () {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetchInstagram().then(response => setData(response.data.data))
  }, [])
  return data
}
