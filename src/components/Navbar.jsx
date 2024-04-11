import { NavLink } from 'react-router-dom'
import { NavHooks } from '../Hooks/NavHooks'
import { LenguageSelector } from './LenguageSelector'
import { useTranslation } from 'react-i18next'

const navLinkStyle = 'text-[#2E2E2E]'

export const HamburguerMenu = ({ isVisible, close }) => {
  const { t } = useTranslation('global')

  return (
    <div className={`${isVisible}  w-full h-[100%] bg-[#EAEAEA]`}>
      <div className="w-full h-[100%] flex">
        <div className="bg-white">
          <button
            onClick={close}
            className="w-[24px] h-[24px] mt-[20px] mx-[30px]"
          >
            <img src="/LandingImages/menu.webp" alt="" />
          </button>
        </div>
        <div className="flex flex-col mt-[20px] ml-[20px] gap-2">
          <NavLink className={navLinkStyle} to="/" onClick={close}>
            {t('Navbar.Home')}
          </NavLink>
          <NavLink
            className={navLinkStyle}
            to="/selectlocation"
            onClick={close}
          >
            {t('Navbar.ReserveNow')}
          </NavLink>
          <NavLink className={navLinkStyle} to="/">
            {t('Navbar.MyReservations')}
          </NavLink>
          <NavLink className={navLinkStyle} to="/">
            {t('Navbar.AboutUs')}
          </NavLink>
          <NavLink className={navLinkStyle} to="/">
            {t('Navbar.ContactUs')}
          </NavLink>
          <NavLink className={navLinkStyle} to="/">
            {t('Navbar.SignIn')}
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export const Navbar = () => {
  const { handleOpen, handleClose, isVisible } = NavHooks()
  const { t } = useTranslation('global')

  return (
    <nav className="flex justify-between items-center px-[15px] h-[56px] md:h-[110px] lg:px-[115px]">
      <button className="w-[30px] h-[45px] md:w-[56px] md:h-[84px]">
        <img src={'/LandingImages/logo.webp'} alt="BeachPointMED" />
      </button>
      {/* este es el diseno que se ve en pantallas grandes */}
      <div className="hidden gap-4 md:flex justify-center items-center ">
        <div className="flex gap-[30px]">
          <NavLink className={navLinkStyle} to="/">
            {t('Navbar.Home')}
          </NavLink>
          <NavLink className={navLinkStyle} to="/">
            {t('Navbar.ReserveNow')}
          </NavLink>
          <NavLink className={navLinkStyle} to="/">
            {t('Navbar.AboutUs')}
          </NavLink>
          <NavLink className={navLinkStyle} to="/">
            {t('Navbar.ContactUs')}
          </NavLink>
          <NavLink className={navLinkStyle} to="/">
            {t('Navbar.MyReservations')}
          </NavLink>
        </div>
        <LenguageSelector />
        <button className="w-[24px] h-[24px] md:w-[40px] md:h-[40px]">
          <img src="/LandingImages/profile.webp" alt="Spanish" />
        </button>
      </div>
      {/* Este es el diseno qeu se ve en pantallas pequenas */}
      <div className="flex gap-3 justify-center items-center md:hidden">
        <button className="w-[31px] h-[31px]">
          <img src="/LandingImages/spanish_flag.webp" alt="" />
        </button>
        <div className="flex items-center gap-2">
          <LenguageSelector />
          <button onClick={handleOpen} className="w-[24px] h-[24px]">
            <img src="/LandingImages/menu.webp" alt="" />
          </button>
        </div>
        <HamburguerMenu isVisible={isVisible} close={handleClose} />
      </div>
    </nav>
  )
}
