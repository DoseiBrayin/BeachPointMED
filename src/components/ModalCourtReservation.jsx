import React from 'react'
import { Approved } from './Approved'
import { NotApproved } from './NotApproved'
import { useModalCourtReservationContext } from '../context/ModalCourtReservationContext'

export const ModalCourtReservation = ({ isApproved = true }) => {
  const { isOpen, onClose } = useModalCourtReservationContext()
  return (
    isOpen && (
      <div className={'fixed inset-0 flex items-center justify-center z-50 overflow-hidden onclose'} onClick={(e) => onClose(e)}>
        <div className="fixed inset-0 bg-black opacity-50 onclose"></div>
        <div className="bg-white p-8 rounded-lg shadow-lg z-10 max-w-lg w-full mx-4">
          {
            isApproved
              ? <Approved />
              : <NotApproved />
          }
        </div>
      </div>
    )
  )
}
