import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {UserMain} from '../src/UserCrud/pages/UserMain'
import {Page404} from '../src/404/page/404.jsx'
import {NavBar} from '../src/components/NavBar/NavBar.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<UserMain />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
