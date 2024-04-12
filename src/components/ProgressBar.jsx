import React from 'react'
import { useTranslation } from 'react-i18next'

export const ProgressBar = ({ percentage = '30%' }) => {
  const { t } = useTranslation('global')
  return (
    <div className='hidden md:flex md:flex-col gap-2 w-full max-w-[64.75rem]'>
        <h1 className='text-[#2E2E2E] text-[30px] font-[700]'>{t('MyCartReservation.Progress')}</h1>
        <div className='flex w-full bg-[#E3E3E3] h-[1rem] rounded-[4px]'>
            <div style={{ width: percentage }} className='h-[100%] bg-[#91D0FF] rounded-l-[4px]'>

            </div>
        </div>
    </div>
  )
}