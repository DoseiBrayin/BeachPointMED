import { useTranslation } from 'react-i18next'
import { BookYourCourtButton } from './BookYourCourtButton'
import { ManageReservationButton } from './ManageReservationButton'

export const Hero = () => {
  const { t } = useTranslation('global')
  return (
      <div className="
      flex
      items-center
      justify-center
      w-full
      bg-[url('/LandingImages/HeroMobile.webp')]
      bg-cover
      bg-center
      h-[485px]
      md:bg-[url('/LandingImages/HeroDesktop.webp')]
      px-4
      md:justify-start
      lg:px-[115px]
      ">
        <div className="max-w-[588px] flex flex-col">
          <div className="flex flex-col gap-0 items-center">
            <p className="text-[32px] text-black md:text-white font-[300]">{t('LandingPage.Hero.MakeA')}</p>
            <h1 className="text-[60px] font-[700] leading-[70px] text-[#FB741A]">{t('LandingPage.Hero.Splash')}</h1>
          </div>
          <div className="w-full mt-5">
            <p className="text-[18px] text-center text-black font-[300] md:text-[#fff] md:text-[28px]">{t('LandingPage.Hero.HeroSlogan')}</p>
            <div className="flex flex-col gap-3 mt-10 items-center md:flex-row ">
              <BookYourCourtButton />
              <ManageReservationButton />
            </div>
          </div>
        </div>
      </div>
  )
}
