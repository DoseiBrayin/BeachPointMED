import React from 'react'

export const Popup = ({ isOpen, onClose, children }) => {
  return (
    isOpen && (
        <div onClick={() => onClose()} className='fixed top-0 left-0 bottom-0 right-0 bg-slate-800 bg-opacity-55'>
        {children}
        </div>
    )
  )
}
