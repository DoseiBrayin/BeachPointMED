import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserById } from '../UsersSlices/userAdminSlice'

const userTypes = {
  CUSTOMERS: 'Usuario',
  EMPLOYEES: 'Empleado',
  ADMIN: 'Admin'
}

const adminLevels = {
  SUPER_ADMIN: 'Super Admin',
  ADMIN: 'Admin',
  CUSTOMERS: 'Usuario'
}

export const ShowUser = () => {
  const dispatch = useDispatch()
  const userById = useSelector((state) => state.userFiltersAdmin.userById)
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="w-full">
        <h3 className="text-[#545F71]">Name</h3>
        <input
          className="border-2 rounded-lg py-2 px-3 w-full text-[#545F71]"
          type="text"
          value={userById?.name}
          onChange={(e) =>
            dispatch(setUserById({ ...userById, name: e.target.value }))
          }
        />
      </div>
      {
        (userById?.type_rol === adminLevels.ADMIN || userById?.type_rol === adminLevels.SUPER_ADMIN) && (
          <div className="w-full">
        <h3 className="text-[#545F71]">Admin Level</h3>
        <select onChange={ (e) =>
          dispatch(setUserById({ ...userById, type_rol: e.target.value }))} className='border-2 rounded-lg py-2 px-3 w-full text-[#545f71]' >
          {
            Object.keys(adminLevels).map((type) => (
              <option key={type} value={adminLevels[type]}>{adminLevels[type]}</option>
            ))
          }
        </select>
      </div>
        )
      }
      {
        (userById?.type_rol === userTypes.CUSTOMERS || userById?.type_rol === userTypes.EMPLOYEES || userById?.type_rol === 'Temporal') && (
          <div className="w-full">
        <h3 className="text-[#545F71]">User Type</h3>
        <select onChange={ (e) =>
          dispatch(setUserById({ ...userById, type_rol: e.target.value }))} className='border-2 rounded-lg py-2 px-3 w-full text-[#545f71]' >
          {
            Object.keys(userTypes).map((type) => (
              <option key={type} value={userTypes[type]}>{userTypes[type]}</option>
            ))
          }
        </select>
      </div>
        )
      }
      {
       (userById?.type_rol === userTypes.EMPLOYEES || userById?.type_rol === 'Temporal') && (
          <div className="w-full">
          <h3 className="text-[#545F71]">Schedule Availability</h3>
          <input
            className="border-2 rounded-lg py-2 px-3 w-full  text-[#545f71]"
            type="text"
            value={0}
            onChange={(e) =>
              dispatch(
                setUserById({ ...userById, phone_number: e.target.value })
              )
            }
          />
        </div>
       )
      }
      {userById?.type_rol === userTypes.CUSTOMERS && (
        <div className="w-full">
          <h3 className="text-[#545F71]">Phone Number</h3>
          <input
            className="border-2 rounded-lg py-2 px-3 w-full  text-[#545f71]"
            type="text"
            value={userById?.phone_number}
            onChange={(e) =>
              dispatch(
                setUserById({ ...userById, phone_number: e.target.value })
              )
            }
          />
        </div>
      )}
      {userById?.type_rol === userTypes.CUSTOMERS && (
        <div className="w-full">
          <h3 className="text-[#545F71]">Email</h3>
          <input
            className="border-2 rounded-lg py-2 px-3 w-full  text-[#545f71]"
            type="text"
            value={userById?.email}
            onChange={(e) =>
              dispatch(setUserById({ ...userById, email: e.target.value }))
            }
          />
        </div>
      )}
      {userById?.type_rol === userTypes.CUSTOMERS && (
        <div className="w-full">
          <h3 className="text-[#545F71]">Discount %</h3>
          <input
            className="border-2 rounded-lg py-2 px-3 w-full  text-[#545f71]"
            type="text"
            value={userById?.type_rol}
            onChange={(e) =>
              dispatch(setUserById({ ...userById, type_rol: e.target.value }))
            }
          />
        </div>
      )}
      {
        (userById?.type_rol === userTypes.EMPLOYEES || userById?.type_rol === 'Temporal' || userById?.type_rol === userTypes.CUSTOMERS) && (
          <div className='flex justify-center'>
            <button className='border-[2px] border-[black] rounded-md w-[280px] h-[45px] flex items-center'>
            <img className='ml-8' src="/SeeSchedule.svg" alt="" />
            <p className='ml-8'>See Schedule</p>
          </button>
          </div>
        )
      }
    </div>
  )
}
