import React, { useState } from 'react'
import { TableReservations } from '../components/TableReservations'
import mockReservations from '../../mocks/reserveData.json'
import Modal from '../../../components/Modal' // Corregir la importación de Modal

export const AdminReservations = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <TableReservations reservations={mockReservations} itemsPerPage={5} />
      <button onClick={() => setShowModal(!showModal)}>Show Modal</button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h1 className='text-center'>
          Manito, pero que me estas container Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, et. Esse fugit vitae nihil. Sed eaque ipsa sit porro quaerat alias, quos pariatur itaque nihil temporibus, voluptates hic doloribus eligendi.
        </h1>
      </Modal>
    </div>
  )
}
