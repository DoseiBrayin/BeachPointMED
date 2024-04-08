import { NavLink } from 'react-router-dom'
import { BookYourCourtButton } from './BookYourCourtButton'
import { ManageReservationButton } from './ManageReservationButton'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const NavLinkStyles = 'text-white font-[200] text-[15px] md:text-[26px]'
  const { t } = useTranslation('global')
  return (
    <div className=" h-[315px]  px-[15px] bg-[#000] flex flex-col justify-end gap-10 pb-3 md:h-[340px] md:items-center lg:px-[115px] md:gap-20">
        <div className="flex flex-col justify-between w-full gap-8 md:flex-row md:items-center">
            <div className="flex items-center justify-center flex-col gap-4 md:min-w-[279px]">
                <BookYourCourtButton />
                <ManageReservationButton backgroundBlack={true} />
            </div>
            <div className="flex gap-5 justify-center">
                <div className="flex flex-col">
                    <NavLink className={NavLinkStyles} to={'/'}>{t('Footer.Home')}</NavLink>
                    <NavLink className={NavLinkStyles} to={'/'}>{t('Footer.AboutUs')}</NavLink>
                    <NavLink className={NavLinkStyles} to={'/'}>{t('Footer.MyReservations')}</NavLink>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-white font-[200] text-[15px] md:text-[26px]">{t('Footer.ContactUs')}</p>
                    <img className="w-[39px] h-[39px] md:w-[76px] md:h-[76px]" src="/LandingImages/WhatsappLogo.webp" alt="" />
                </div>
                <button>
                    <img className="w-[47px] h-[71px] md:w-[78px] md:h-[117px]" src="/LandingImages/logo.webp" alt="" />
                </button>
            </div>
        </div>
        <p className="text-[#646463] font-[200] text-[12px] text-center md:text-[24px]">Copyright 2024 All Rights Reserved Beach Point Made by DoneRight Product</p>
    </div>
  )
}
