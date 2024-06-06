import { useState } from 'react'
import { useBookYourCourtContext } from '../../context/BookYourCourtContext'
import { useLocalStorage } from '../../Hooks/useLocalStorage'
import axios from 'axios'

export const ButtonAddCart = ({ court }) => {
  const { bookCourt, setBookCourt } = useBookYourCourtContext()
  const [cartState, setCartState] = useState(true)
  const { setItem } = useLocalStorage({ key: 'order' })

  const handleCart = async () => {
    setCartState(!cartState)
    if (cartState && bookCourt.Refreshments && bookCourt.Refreshments.length === 0) {
      // If there are no refreshments will add them to the global object

      const url = import.meta.env.VITE_BEACHPOINT_API_URL
      const token = import.meta.env.VITE_BEACHPOINT_API_TOKEN

      const response = await axios.get(`${url}products`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const Refreshments = response.data.data.map(refreshObject => {
        refreshObject = { ...refreshObject, quantity: 0 }
        return refreshObject
      })
      setBookCourt({ ...bookCourt, courts: [...bookCourt.courts, court], Refreshments })
      setItem({ ...bookCourt, courts: [...bookCourt.courts, court], Refreshments })
    } else if (cartState) {
      // add the court to the cart
      setBookCourt({ ...bookCourt, courts: [...bookCourt.courts, court] })
      setItem({ ...bookCourt, courts: [...bookCourt.courts, court] })
    } else {
      // remove the court from the cart
      const filteredCourts = bookCourt.courts.filter(courtItem => courtItem.id !== court.id)
      setBookCourt({ ...bookCourt, courts: filteredCourts })
      setItem({ ...bookCourt, courts: filteredCourts })
    }
  }

  const setName = () => {
    if (cartState && window.innerWidth <= 340) {
      return 'Add'
    } else if (cartState) {
      return 'Add Cart'
    } else {
      return 'Remove'
    }
  }

  return (
    <div className=" md:flex md:justify-center">
      <button
        onClick={handleCart}
        className={cartState ? 'buttonAdd' : 'inCart inCartShadow'}
      >
        {setName()}
      </button>
    </div>
  )
}
