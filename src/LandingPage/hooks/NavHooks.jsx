import { useState } from 'react'

export const NavHooks = () => {
  const [isVisible, setIsVisible] = useState('hidden')

  const handleOpen = () => {
    setIsVisible('fixed top-0 right-[-100%] scrollMenu')
  }

  const handleClose = () => {
    setIsVisible('fixed top-0 scrollMenuClose')
  }

  return {
    isVisible,
    handleOpen,
    handleClose
  }
}
