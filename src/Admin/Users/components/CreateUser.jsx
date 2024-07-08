import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserById } from '../UsersSlices/userAdminSlice'

export const CreateUser = () => {
  const dispatch = useDispatch()
  const userById = useSelector((state) => state.userFiltersAdmin.userById)
  return (
    <div className='flex flex-col gap-4 w-full'>
              <div className='w-full'>
                <h3 className='text-[#545F71]'>Name</h3>
                <input
                className='border-2 rounded-lg py-2 px-3 w-full'
                type="text"
                value={userById?.name}
                onChange={(e) => dispatch(setUserById({ ...userById, name: e.target.value }))} />
              </div>
              <div className='w-full'>
                <h3 className='text-[#545F71]'>User Type</h3>
                <input
                className='border-2 rounded-lg py-2 px-3 w-full'
                type="text"
                value={userById?.type_rol}
                onChange={(e) => dispatch(setUserById({ ...userById, type_rol: e.target.value }))}
                />
              </div>
              <div className='w-full'>
                <h3 className='text-[#545F71]'>Phone Number</h3>
                <input
                className='border-2 rounded-lg py-2 px-3 w-full'
                type="text"
                value={userById?.phone_number}
                onChange={(e) => dispatch(setUserById({ ...userById, phone_number: e.target.value }))}
                />
              </div>
              <div className='w-full'>
                <h3 className='text-[#545F71]'>Email</h3>
                <input
                className='border-2 rounded-lg py-2 px-3 w-full'
                type="text"
                value={userById?.email}
                onChange={(e) => dispatch(setUserById({ ...userById, email: e.target.value }))}
                />
              </div>
              <div className='w-full'>
                <h3 className='text-[#545F71]'>Discount %</h3>
                <input
                className='border-2 rounded-lg py-2 px-3 w-full'
                type="text"
                value={userById?.type_rol}
                onChange={(e) => dispatch(setUserById({ ...userById, type_rol: e.target.value }))}
                />
              </div>
            </div>
  )
}
