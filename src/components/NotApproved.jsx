import { useTranslation } from 'react-i18next'

export const NotApproved = () => {
  const { t } = useTranslation('global')
  return (
    <div className="flex justify-center items-center flex-col gap-5 hola">
        <img src="/NotApproved.svg" alt="" className="w-[120px] hola" />
        <p className='text-center'>
              {t('Modals.CourtsReservation.ErrorMessage')}
        </p>
    </div>
  )
}
