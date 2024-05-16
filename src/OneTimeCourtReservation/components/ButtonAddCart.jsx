import { useState } from 'react'
import { useBookYourCourtContext } from '../../context/BookYourCourtContext'
import { useLocalStorage } from '../../Hooks/useLocalStorage'
import { useProducts } from '../../MyCartReservation/hooks/useProducts'

export const ButtonAddCart = ({ court }) => {
  const { bookCourt, setBookCourt } = useBookYourCourtContext()
  const [cartState, setCartState] = useState(true)
  const { setItem } = useLocalStorage({ key: 'order' })
  const { data } = useProducts()

  const handleCart = () => {
    setCartState(!cartState)
    if (cartState && bookCourt.Refreshments && bookCourt.Refreshments.length === 0) {
      // If there are no refreshments will add them to the global object
      setBookCourt({ ...bookCourt, courts: [...bookCourt.courts, court], Refreshments: data.data })
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

  return (
    <div className=" md:flex md:justify-center">
      <button
        onClick={handleCart}
        className={cartState ? 'buttonAdd' : 'inCart inCartShadow'}
      >
        {cartState ? 'Add to cart' : 'Remove'}
      </button>
    </div>
  )
}
