import { useState } from 'react'
import { mockRefreshments } from '../mocks/refreshments.json'

export const useCart = () => {
  const [refreshments, setRefreshments] = useState(mockRefreshments)

  const handleMinus = (event) => {
    const idToMinus = event.target.closest('tr').id
    setRefreshments(data => {
      return data.map(item => {
        if (item.id === idToMinus) {
          if (parseInt(item.quantity) === 0) return item
          return {
            ...item,
            quantity: parseInt(item.quantity) - 1
          }
        }
        return item
      })
    })
  }

  const handlePlus = (event) => {
    const idToPlus = event.target.closest('tr').id
    setRefreshments(data => {
      return data.map(item => {
        if (item.id === idToPlus) {
          return {
            ...item,
            quantity: parseInt(item.quantity) + 1
          }
        }
        return item
      })
    })
  }

  return {
    handleMinus,
    handlePlus,
    refreshments
  }
}
