import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../auth/AuthSlices/authSlice'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export const DashboardAdmin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(logout())
    toast.success('Successfully logged out')
    navigate('/')
  }
  return (
      <div>
        <Toaster />
        <h1>
            Dashboard
        </h1>
        <button className='bg-black text-white' onClick={() => handleLogout()}>
                Sali de aca bobo
        </button>
    </div>
  )
}
