import React, { createContext, useContext, useState } from 'react'

const CourtDateContext = createContext()

export const useCourtDateContext = () => useContext(CourtDateContext)

export const CourtDateProvider = ({ children }) => {
  const [dataCourtDate, setDataCourtDate] = useState({})

  return (
    <CourtDateContext.Provider value={{ dataCourtDate, setDataCourtDate }}>
      {children}
    </CourtDateContext.Provider>
  )
}
