import React from 'react'
import { UseStateCart } from '../Hooks/UseStateCart.jsx'

export const ButtonAddCart = ({court }) => {
  const { cartState, handleCart } = UseStateCart({court: court})

  return (
    <div className=" md:flex md:justify-center">
    <button
      onClick={handleCart}
      className={cartState ? 'buttonAdd' : 'inCart inCartShadow'}
      >
      {cartState ? 'Add to cart' : 'Remove'}
    </button>
    </div>
  )
}
