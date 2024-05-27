import { useTranslation } from 'react-i18next'

export const Approved = () => {
  const { t } = useTranslation('global')
  return (
    <div className="flex justify-center items-center flex-col gap-5 hola">
        <img src="/Approved.svg" alt="" className="w-[120px] hola" />
        <p className='text-center'>
            {t('Modals.CourtsReservation.SuccessMessage')}
        </p>
    </div>
  )
}
