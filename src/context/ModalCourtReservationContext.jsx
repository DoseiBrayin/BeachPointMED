import React, { createContext, useContext, useState } from 'react'

const ModalCourtReservationContext = createContext()

export const useModalCourtReservationContext = () => useContext(ModalCourtReservationContext)

export const ModalCourtReservationProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isApproved, setIsApproved] = useState(false)

  const setClose = () => {
    setIsOpen(false)
  }

  const setApproved = () => {
    setIsApproved(true)
  }

  const setNotApproved = () => {
    setIsApproved(false)
  }

  const onClose = (e) => {
    if (e.target.className.includes('onclose')) {
      setIsOpen(false)
    }
  }

  const onOpen = () => {
    setIsOpen(true)
  }

  return (
    <ModalCourtReservationContext.Provider value={{ isOpen, onClose, onOpen, setClose, setApproved, setNotApproved, isApproved }}>
      {children}
    </ModalCourtReservationContext.Provider>
  )
}
