import { useState } from 'react'
import { useBookYourCourtContext } from '../../context/BookYourCourtContext'
import { useLocalStorage } from '../../Hooks/useLocalStorage'

export const ButtonAddCart = ({ court }) => {
  const { bookCourt, setBookCourt } = useBookYourCourtContext()
  const [cartState, setCartState] = useState(true)
  const { setItem } = useLocalStorage({ key: 'order' })

  const handleCart = () => {
    setCartState(!cartState)
    if (cartState) {
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
