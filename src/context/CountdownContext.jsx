import React, { createContext, useContext } from 'react'
import { useCountdown } from '../Hooks/useCountdown'

const CountdownContext = createContext()

export const useCountdownContext = () => useContext(CountdownContext)

export const CountdownContextProvider = ({ children }) => {
  const { countdown, countValue } = useCountdown()

  return (
    <CountdownContext.Provider value={{ countdown, countValue }}>
      {children}
    </CountdownContext.Provider>
  )
}
