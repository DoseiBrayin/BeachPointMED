import { useState } from 'react'
import { mockRefreshments } from '../mocks/refreshments.json'
import { useBookYourCourtContext } from '../../context/BookYourCourtContext'

export const useCart = () => {
  const [refreshments, setRefreshments] = useState(mockRefreshments)
  const { bookCourt, setBookCourt } = useBookYourCourtContext()

  const deleteCourts = (court) => {
    const filteredCourts = bookCourt.courts.filter((courtItem) => court.id !== courtItem.id)
    setBookCourt({ ...bookCourt, courts: filteredCourts })
  }

  const deleteRefreshments = (refreshment) => {
    const filteredRefreshments = bookCourt.Refreshments.filter((refreshmentItem) => refreshment.id !== refreshmentItem.id)
    setBookCourt({ ...bookCourt, Refreshments: filteredRefreshments })
  }

  const handleMinus = (event) => {
    const idToMinus = event.target.closest('tr').id
    setRefreshments(data => {
      return data.map(item => {
        if (item.id === idToMinus) {
          if (parseFloat(item.quantity) === 0) return item
          return {
            ...item,
            quantity: parseFloat(item.quantity) - 1
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
            quantity: parseFloat(item.quantity) + 1
          }
        }
        return item
      })
    })
  }

  return {
    handleMinus,
    handlePlus,
    deleteCourts,
    deleteRefreshments,
    refreshments
  }
}
