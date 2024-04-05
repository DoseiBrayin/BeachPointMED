/* eslint-disable react/react-in-jsx-scope */
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Page404 } from '../src/404/page/404.jsx'
import { Navbar } from './LandingPage/components/Navbar.jsx'
import { Landing } from './LandingPage/pages/Landing.jsx'

function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
