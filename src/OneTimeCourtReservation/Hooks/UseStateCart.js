import { useState } from 'react'
import { useBookYourCourtContext } from '../../context/BookYourCourtContext'

export const UseStateCart = ({ court }) => {
  const [cartState, setCartState] = useState(true)

  const { bookCourt, setBookCourt } = useBookYourCourtContext()
  function handleCart () {
    if (cartState === true) {
      setCartState(false)
      const newCourt = {
        timecourt: court.id,
        state: 'Pending',
        fkCourt: court.fk_court,
        description: court.description
      }
      setBookCourt((prevBookCourt) => ({
        ...prevBookCourt,
        courts: [...prevBookCourt.courts, newCourt]
      }))
    } else {
      setCartState(true)
      const filteredCourts = [...bookCourt.courts]
      const indexToRemove = filteredCourts.findIndex(
        (item) => item.timecourt === court.id
      )
      if (indexToRemove !== -1) {
        filteredCourts.splice(indexToRemove, 1)
        setBookCourt((prevBookCourt) => ({
          ...prevBookCourt,
          courts: filteredCourts
        }))
      }
    }
  }

  return {
    cartState,
    handleCart
  }
}
