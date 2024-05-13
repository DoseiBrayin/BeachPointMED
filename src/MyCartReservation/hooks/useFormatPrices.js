import { useBookYourCourtContext } from '../../context/BookYourCourtContext'
import { mockRefreshments } from '../mocks/refreshments.json'

export const useFormatePrices = () => {
  const {bookCourt} = useBookYourCourtContext()
  // this function will format the price to a string with the format '60,000'
  const formatPrice = (price) => {
    const formatedPrice = price.toLocaleString('es-CO', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
    return formatedPrice
  }

  // if you want to use this function you need to have the propertie cost in the object
  // and the format must be a string like '60000'
  const getTotalPrice = ({ list }) => {
    let total = 0
    list.forEach(item => {
      total += parseInt(item.price)
    })
    const formatedTotal = formatPrice(total)
    return formatedTotal
  }

  const getGrandTotalPrice = () => {
    const totalCourts = bookCourt.courts.map(court => {
      return parseInt(court.price)
    })
    const totalRefreshments = mockRefreshments.map(refreshment => {
      return parseInt(refreshment.cost)
    })
    const court = totalCourts.reduce((acc, value) => acc + value, 0)
    const refreshment = totalRefreshments.reduce((acc, value) => acc + value, 0)
    return formatPrice(court + refreshment)
  }

  return {
    formatPrice,
    getTotalPrice,
    getGrandTotalPrice
  }
}
