import { useBookYourCourtContext } from '../../context/BookYourCourtContext'

export const useFormatePrices = () => {
  const { bookCourt } = useBookYourCourtContext()

  const getTotalPrice = ({ list }) => {
    let total = 0
    list.forEach((item) => {
      total += parseFloat(item.price)
    })
    return total
  }

  const getGrandTotalPrice = (refreshments) => {
    const totalCourts = bookCourt.courts.map((court) => {
      return parseFloat(court.price)
    })
    const totalRefreshments = refreshments.map((refreshment) => {
      return parseFloat(refreshment.price)
    })
    const court = totalCourts.reduce((acc, value) => acc + value, 0)
    const refreshment = totalRefreshments.reduce(
      (acc, value) => acc + value,
      0
    )
    return court + refreshment
  }

  return {
    getTotalPrice,
    getGrandTotalPrice
  }
}
