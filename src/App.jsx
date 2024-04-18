/* eslint-disable react/react-in-jsx-scope */
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Page404 } from '../src/404/page/404.jsx'
import { Landing } from './LandingPage/pages/Landing.jsx'
import { MyCartReservationPage } from './MyCartReservation/Pages/MyCartReservationPage.jsx'
import { Navbar } from './components/Navbar.jsx'
import { LocationSelection } from './LocationSelection/pages/LocationSelection.jsx'
import { BookYourCourtProvider } from './context/BookYourCourtContext.jsx'
import { CourtReservation } from './OneTimeCourtReservation/Pages/CourtReservation.jsx'
import { Main } from './OneTimeCourtReservation/components/main.jsx'
import { CountdownContextProvider } from './context/CountdownContext.jsx'

function App () {
  return (
    <>
    <BookYourCourtProvider>
      <CountdownContextProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/reserve" element={<Main />} />
          <Route path="/MyCart" element={<MyCartReservationPage />} />
          <Route path="/LocationSelection" element={<LocationSelection />} />
          <Route path="/reserve" element={<CourtReservation />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      </CountdownContextProvider>
    </BookYourCourtProvider>
    </>
  )
}

export default App
