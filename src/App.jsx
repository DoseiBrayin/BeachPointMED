/* eslint-disable react/react-in-jsx-scope */
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Page404 } from '../src/404/page/404.jsx'
import { Landing } from './LandingPage/pages/Landing.jsx'
import { MyCartReservationPage } from './MyCartReservation/Pages/MyCartReservationPage.jsx'
import { Navbar } from './components/Navbar.jsx'
import { LocationSelection } from './LocationSelection/pages/LocationSelection.jsx'
import { BookYourCourtProvider } from './context/BookYourCourtContext.jsx'
import { StartCountProvider } from './context/StartCountdownContext.jsx'
import { CourtReservationCalendar } from './OneTimeCourtReservation/Pages/court-reservation.jsx'
import { ConfirmationPage } from './ConfimationPage/pages/ConfirmationPage.jsx'
import { CheckOutConfirmation } from './MyCartReservation/Pages/CheckoutConfirmation.jsx'
import { CourtDateProvider } from './context/CourtsDateContext.jsx'
import { ModalCourtReservationProvider } from './context/ModalCourtReservationContext.jsx'
import { Login } from './auth/Login/pages/Login.jsx'
import { SignUp } from './auth/SignUp/pages/SignUp.jsx'
import { ForgotPw } from './auth/ForgotPassword/pages/ForgotPw.jsx'
import { ResetPw } from './auth/ResetPassword/pages/ResetPw.jsx'

function App () {
  return (
    <>
    <ModalCourtReservationProvider>
      <StartCountProvider>
        <BookYourCourtProvider>
          <CourtDateProvider>
          <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/reserve/:locationId" element={<CourtReservationCalendar />} />
              <Route path="/MyCart" element={<MyCartReservationPage />} />
              <Route path="/LocationSelection" element={<LocationSelection />} />
              <Route path="/reserve" element={<CourtReservationCalendar />} />
              <Route path='/confirmationPage' element={<ConfirmationPage />}/>
              <Route path='/CheckOutConfirmation' element={<CheckOutConfirmation />}/>
              <Route path='/login' element={<Login/>} />
              <Route path='/signUp' element={<SignUp/>} />
              <Route path='/forgotPassword' element={<ForgotPw />} />
              <Route path='/resetPassword' element={<ResetPw />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </BrowserRouter>
          </CourtDateProvider>
        </BookYourCourtProvider>
      </StartCountProvider>
    </ModalCourtReservationProvider>
    </>
  )
}

export default App
