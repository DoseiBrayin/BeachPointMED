/* eslint-disable react/react-in-jsx-scope */
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Page404 } from '../src/404/page/404.jsx'
import { Landing } from './LandingPage/pages/Landing.jsx'
import { MyCartReservationPage } from './MyCartReservation/Pages/MyCartReservationPage.jsx'
import { Navbar } from './components/Navbar.jsx'
import { LocationSelection } from './LocationSelection/pages/LocationSelection.jsx'

function App () {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/MyCart" element={<MyCartReservationPage />} />
          <Route path="/LocationSelection" element={<LocationSelection />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
