import React, { useState } from 'react'
import { TableReservations } from '../components/TableReservations'
import mockReservations from '../../mocks/reserveData.json'
import Modal from '../../../components/Modal'
import { Calendar } from '../../../OneTimeCourtReservation/components/calendar'

export const AdminReservations = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <TableReservations reservations={mockReservations} itemsPerPage={5} />
      <button onClick={() => setShowModal(!showModal)}>Show Modal</button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>Header del modelo</Modal.Header>
        <Modal.Body classNamePadre='flex justify-center' classNameHijo='border border-gray-300 rounded-lg flex flex-col justify-center items-center ' >
          <Calendar />
        </Modal.Body>
        <Modal.Footer className='gap-4 flex items-center'>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
