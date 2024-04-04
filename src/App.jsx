import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {UserMain} from '../src/UserCrud/pages/UserMain'
import {Page404} from '../src/404/page/404.jsx'
import {NavBar} from '../src/components/NavBar/NavBar.jsx'
import { Landing } from './LandingPage/pages/Landing.jsx'
import { CourtReservation } from './One Time Court Reservation/Pages/court-reservation.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />  
        <Routes>
          <Route path="/" element={<CourtReservation />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
