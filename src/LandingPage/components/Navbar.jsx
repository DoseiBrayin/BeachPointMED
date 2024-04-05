import { NavLink } from 'react-router-dom'
import { NavHooks } from '../hooks/NavHooks'

const navLinkStyle = 'text-[#2E2E2E]'

export const HamburguerMenu = ({ isVisible, close }) => {
  return (
    <div className={`${isVisible}  w-full h-[100%] bg-[#EAEAEA]`}>
      <div className="w-full h-[100%] flex">
        <div className="bg-white">
          <button
            onClick={close}
            className="w-[24px] h-[24px] mt-[20px] mx-[30px]"
          >
            <img src="public/LandingImages/menu.webp" alt="" />
          </button>
        </div>
        <div className="flex flex-col mt-[20px] ml-[20px] gap-2">
          <NavLink className={navLinkStyle} to="/" onClick={close}>
            Home
          </NavLink>
          <NavLink className={navLinkStyle} to="/selectlocation" onClick={close}>
            Reserve Now
          </NavLink>
          <NavLink className={navLinkStyle} to="/">
            My Reservations
          </NavLink>
          <NavLink className={navLinkStyle} to="/">
            About Us
          </NavLink>
          <NavLink className={navLinkStyle} to="/">
            Contact Us
          </NavLink>
          <NavLink className={navLinkStyle} to="/">
            Sign In
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export const Navbar = () => {
  const { handleOpen, handleClose, isVisible } = NavHooks()

  return (
    <nav className="flex justify-between items-center px-[15px] h-[56px] md:h-[110px] lg:px-[115px]">
      <button className="w-[30px] h-[45px]">
        <img src={"public/LandingImages/LogoBP.webp"} />
      </button>
      {/* este es el diseno que se ve en pantallas grandes */}
      <div className="hidden gap-3 md:flex">
        <div className="flex gap-[30px]">
          <NavLink className={navLinkStyle} to="/">
            Home
          </NavLink>
          <NavLink className={navLinkStyle} to="/selectlocation">
            Reserve Now
          </NavLink>
          <NavLink className={navLinkStyle} to="/">
            About Us
          </NavLink>
          <NavLink className={navLinkStyle} to="/">
            Contact Us
          </NavLink>
          <NavLink className={navLinkStyle} to="/">
            My Reservations
          </NavLink>
        </div>
        <button className="w-[24px] h-[24px]">
          <img src="public/LandingImages/spanish.webp" alt="" />
        </button>
        <button className="w-[24px] h-[24px]">
          <img src="public/LandingImages/profile.webp" alt="" />
        </button>
      </div>
      {/* Este es el diseno qeu se ve en pantallas pequenas */}
      <div className="flex gap-3 justify-center items-center md:hidden">
        <button className="w-[31px] h-[31px]">
          <img src="public/LandingImages/spanish.webp" alt="" />
        </button>
        <button onClick={handleOpen} className="w-[24px] h-[24px]">
          <img src="public/LandingImages/menu.webp" alt="" />
        </button>
      </div>
      <HamburguerMenu isVisible={isVisible} close={handleClose} />
    </nav>
  )
}
