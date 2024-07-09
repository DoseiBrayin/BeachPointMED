import React, { useEffect, useState } from 'react'
import { useCreateUserMutation } from '../UsersSlices/userAdminAPI'
import { v4 as uuidv4 } from 'uuid'

const userTypes = {
  CUSTOMERS: 'Usuario',
  EMPLOYEES: 'Empleado',
  ADMIN: 'Admin',
  SUPER_ADMIN: 'Super Admin'
}

export const CreateUser = () => {
  const [userData, setUserData] = useState({
    id: uuidv4(),
    cedula: '',
    phone_number: '',
    email: '',
    name: '',
    password: '',
    card_id: '',
    is_employee: false,
    fk_rol: 'TMP'
  })
  const [createUser] = useCreateUserMutation()

  useEffect(() => {
    console.log(userData)
  }, [userData])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    createUser(userData)
    setUserData({
      id: uuidv4(),
      cedula: '',
      phone_number: '',
      email: '',
      name: '',
      password: '',
      card_id: '',
      is_employee: false,
      fk_rol: 'TMP'
    })
  }

  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
      <div className="w-full">
        <h3 className="text-[#545F71]">Name</h3>
        <input
          className="border-2 rounded-lg py-2 px-3 w-full text-[#545F71]"
          type="text"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
      </div>
      <div className="w-full">
        <h3 className="text-[#545F71]">Email</h3>
        <input
          className="border-2 rounded-lg py-2 px-3 w-full text-[#545F71]"
          type="text"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
      </div>
      <div className="w-full">
        <h3 className="text-[#545F71]">Password</h3>
        <input
          className="border-2 rounded-lg py-2 px-3 w-full text-[#545F71]"
          type="password"
          value={userData.password}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        />
      </div>
      <div className="w-full">
        <h3 className="text-[#545F71]">Phone Number</h3>
        <input
          className="border-2 rounded-lg py-2 px-3 w-full text-[#545F71]"
          type="text"
          value={userData.phone_number}
          onChange={(e) => setUserData({ ...userData, phone_number: e.target.value })}
        />
      </div>
      <div className="w-full">
        <h3 className="text-[#545F71]">ID</h3>
        <input
          className="border-2 rounded-lg py-2 px-3 w-full text-[#545F71]"
          type="text"
          value={userData.cedula}
          onChange={(e) => setUserData({ ...userData, cedula: e.target.value })}
        />
      </div>
      <div className="w-full">
        <h3 className="text-[#545F71]">User Rol</h3>
        <select
          className="border-2 rounded-lg py-2 px-3 w-full text-[#545F71]"
          onChange={(e) => setUserData({ ...userData, fk_rol: e.target.value })}
        >
          <option value={userTypes.CUSTOMERS}>Usuario</option>
          <option value={userTypes.EMPLOYEES}>Empleado</option>
          <option value={userTypes.ADMIN}>Admin</option>
          <option value={userTypes.SUPER_ADMIN}>Super Admin</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-lg py-2 px-4 mt-4 self-end"
      >
        Create User
      </button>
    </form>
  )
}
