import React, { createContext, useContext, useState } from 'react'

const BookYourCourtContext = createContext()

export const useBookYourCourtContext = () => useContext(BookYourCourtContext)

export const BookYourCourtProvider = ({ children }) => {
  const [bookCourt, setBookCourt] = useState({ location: null })

  return (
    <BookYourCourtContext.Provider value={{ bookCourt, setBookCourt }}>
      {children}
    </BookYourCourtContext.Provider>
  )
}