import React from 'react'
import { PlayCard } from './PlayCard'
import { useTranslation } from 'react-i18next'

export function PlaySection ({ img, header, paragraph }) {
  const { t } = useTranslation('global')
  return (
    <>
      <section className="flex flex-col items-center mt-[25px]">
      <h2 className="bold-heading-mobile font-[700] text-[25px] md:text-[32px] text-center">{t('LandingPage.WhyPlayWithUs.title')}</h2>
      <h3 className="font-inter font-normal text-[16px] w-[60%] text-center mt-5">{t('LandingPage.WhyPlayWithUs.Subtitle')}</h3>
      <main className="w-full flex justify-center items-center mt-[25px]">
        <div
        className="w-full flex flex-col justify-center items-center gap-5
        sm:flex sm:flex-col sm:gap-5
        md:grid md:grid-rows-2 md:grid-cols-2 md:gap-5 md:w-[70%] md:h-[40%]"
        >
          <PlayCard
            header={t('LandingPage.WhyPlayWithUs.BookOnline.title')}
            paragraph={t('LandingPage.WhyPlayWithUs.BookOnline.description')}
            img={'PlayWithUs-computer.webp'}
          />
          <PlayCard
            header={t('LandingPage.WhyPlayWithUs.PayOnlineOrAtArrival.title')}
            paragraph={
              t('LandingPage.WhyPlayWithUs.PayOnlineOrAtArrival.description')
            }
            img={'PlayWithUs-wallet.webp'}
          />
          <PlayCard
            header={ t('LandingPage.WhyPlayWithUs.QualityCourts.title')}
            paragraph={
              t('LandingPage.WhyPlayWithUs.QualityCourts.description')
            }
            img={'PlayWithUs-courts.svg'}
          />
          <PlayCard
            header={t('LandingPage.WhyPlayWithUs.ExeptionalService.title')}
            paragraph={
              t('LandingPage.WhyPlayWithUs.ExeptionalService.description')
            }
            img={'PlayWithUs-stars.svg'}
          />
        </div>
      </main>
    </section>
    </>

  )
}
