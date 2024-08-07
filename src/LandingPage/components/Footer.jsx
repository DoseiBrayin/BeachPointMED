import { NavLink } from 'react-router-dom'
import { BookYourCourtButton } from './BookYourCourtButton'
import { ManageReservationButton } from './ManageReservationButton'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const NavLinkStyles = 'text-white font-[200] text-[15px] md:text-[26px]'
  const { t } = useTranslation('global')

  const handleContact = () => {
    window.location.href = 'https://wa.me/573046678345'
  }

  return (
    <div className=" h-[315px]  px-[15px] bg-[#000] flex flex-col justify-end gap-10 pb-3 md:h-[340px] md:items-center lg:px-[115px] md:gap-20">
        <div className="flex flex-col justify-between w-full md:gap-8 md:flex-row md:items-center">
            <div className="flex items-center justify-center flex-col gap-4 md:min-w-[279px]">
                <BookYourCourtButton />
                <ManageReservationButton backgroundBlack={true} />
            </div>
                <div className="md:flex flex-col hidden">
                    <NavLink className={NavLinkStyles} to={'/'}>{t('Footer.Home')}</NavLink>
                    <NavLink className={`${NavLinkStyles} hidden`} to={'/'}>{t('Footer.AboutUs')}</NavLink>
                    <NavLink className={`${NavLinkStyles} hidden`} to={'/'}>{t('Footer.MyReservations')}</NavLink>
                </div>
                <div className="md:flex flex-col items-center hidden">
                    <p className="text-white font-[200] text-[15px] md:text-[26px]">{t('Footer.ContactUs')}</p>
                    <img onClick={() => handleContact()} className="cursor-pointer w-[39px] h-[39px] md:w-[76px] md:h-[76px]" src="/LandingImages/WhatsappLogo.webp" alt="" />
                </div>
                <button className='hidden md:flex'>
                    <img className="w-[47px] h-[71px] md:w-[78px] md:h-[117px]" src="https://pub-9ce9ae707f414f62ad3249af96d412df.r2.dev/BP-logo.webp" alt="" />
                </button>
                <div className='flex md:hidden justify-between px-5 mt-5'>
                    <div className="flex flex-col">
                        <NavLink className={`${NavLinkStyles}`} to={'/'}>{t('Footer.Home')}</NavLink>
                        <NavLink className={`${NavLinkStyles} hidden`} to={'/'}>{t('Footer.AboutUs')}</NavLink>
                        <NavLink className={`${NavLinkStyles} hidden`} to={'/'}>{t('Footer.MyReservations')}</NavLink>
                    </div>
                    <div className="flex flex-col items-center" onClick={() => handleContact()}>
                        <p className="text-white font-[200] text-[15px] md:text-[26px]">{t('Footer.ContactUs')}</p>
                        <img className="w-[39px] h-[39px] md:w-[76px] md:h-[76px]" src="/LandingImages/WhatsappLogo.webp" alt="" />
                    </div>
                    <button className='flex'>
                        <img className="w-[47px] h-[71px] md:w-[78px] md:h-[117px]" src="https://pub-9ce9ae707f414f62ad3249af96d412df.r2.dev/BP-logo.webp" alt="" />
                    </button>
                </div>
        </div>
        <p className="text-[#646463] font-[200] text-[12px] text-center md:text-[24px]">Copyright 2024 All Rights Reserved Beach Point Made by DoneRight Product</p>
    </div>
  )
}
