import React, { createContext, useContext, useState } from 'react'

const StartCountdownContext = createContext()

export const useStartContext = () => useContext(StartCountdownContext)

export const StartCountProvider = ({ children }) => {
  const [start, setStart] = useState(false)

  return (
    <StartCountdownContext.Provider value={{ start, setStart }}>
      {children}
    </StartCountdownContext.Provider>
  )
}
