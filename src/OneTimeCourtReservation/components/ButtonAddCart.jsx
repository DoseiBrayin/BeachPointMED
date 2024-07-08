import { useState } from 'react'
import { useBookYourCourtContext } from '../../context/BookYourCourtContext'

export const ButtonAddCart = ({ court }) => {
  const { bookCourt, setBookCourt } = useBookYourCourtContext()
  const [cartState, setCartState] = useState(true)

  const handleCart = async () => {
    setCartState(!cartState)
    if (cartState) {
      // add the court to the cart
      setBookCourt({ ...bookCourt, courts: [...bookCourt.courts, court] })
    } else {
      // remove the court from the cart
      const filteredCourts = bookCourt.courts.filter(courtItem => courtItem.id !== court.id)
      setBookCourt({ ...bookCourt, courts: filteredCourts })
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
