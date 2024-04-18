import React from 'react'
import { ProgressBar } from '../../components/ProgressBar'
import { useTranslation } from 'react-i18next'
import { Selector } from '../components/Selector'
import { useSelectorLocation } from '../Hooks/useSelectorLocation'
import { SomethingWentWrong } from '../../components/SomethingWentWrong'
import { useBookYourCourtContext } from '../../context/BookYourCourtContext'
import { Link } from 'react-router-dom'

export const LocationSelection = () => {
  const { t } = useTranslation('global')
  const { error } = useSelectorLocation()
  const { bookCourt } = useBookYourCourtContext()

  window.addEventListener('load', () => {
    bookCourt.location = null
  })

  const locationId = bookCourt.location?.id

  return (
    error
      ? <SomethingWentWrong />
      : <div className='flex flex-col justify-between px-[15px] md:px-[15px] h-screen-minus-100px md:h-screen-minus-200px items-center'>
    <div className='w-full max-w-[64.75rem] flex flex-col'>
      <ProgressBar percentage='0%' />
          <div className='w-full flex flex-col items-center md:items-start'>
              <h1 className='font-bold text-[24px] text-[#2E2E2E] md:text-[45px]'>{t('LocationSelection.title')}</h1>
                <div className='w-full mt-[50px] flex justify-center items-center'>
                  <Selector />
                </div>
          </div>
    </div>
    <div className='w-full flex justify-end max-w-[64.75rem]'>
        <div className='flex gap-3 '>
            <Link className='border-[1px] rounded-md px-2 py-1' to={'/'}>back</Link>
            <Link className='border-[1px] rounded-md px-2 py-1' to={`/reserve/${locationId}`}>next</Link>
        </div>
    </div>
  </div>
  )
}
