import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

export const BookYourCourtButton = () => {
  const { t } = useTranslation('global')
  return (
      <NavLink className="
      max-w-[279px]
      w-full
      text-white
      bg-[#0B6FF4]
      h-[45px]
      rounded-[25px]
      flex
      justify-center
      items-center
      gap-2
      md:border-[#fff]
      "
      to={'/LocationSelection'}
      >
          <img className="w-[33px] h-[33px]" src="/LandingImages/BookYourCourt.webp" alt="" />
          {t('LandingPage.BookYourCourtButton.BookYourCourt')}
      </NavLink>
  )
}
