import React from 'react'
import { ProgressBar } from '../../components/ProgressBar'
import { useTranslation } from 'react-i18next'
import { BackNextButtons } from '../../components/BackNextButtons'

export const LocationSelection = () => {
  const { t } = useTranslation('global')
  return (
    <div className='flex flex-col justify-between px-[15px] md:px-[15px] h-screen-minus-200px items-center'>
      <div className='w-full max-w-[64.75rem] flex flex-col'>
        <ProgressBar percentage='0%' />
            <div className='w-full flex flex-col items-center md:items-start mt-8'>
                <h1 className='font-bold text-[24px] md:text-[45px]'>{t('LocationSelection.title')}</h1>
            </div>
      </div>
      <BackNextButtons backURL={'/'} nextURL={'/SelectPlayingTime'} />
    </div>
  )
}
