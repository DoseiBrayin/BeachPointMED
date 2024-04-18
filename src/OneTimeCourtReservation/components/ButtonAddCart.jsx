import React from 'react'
import { UseStateCart } from '../Hooks/UseStateCart.jsx'

export const ButtonAddCart = () => {
  const { cartState, handleCart } = UseStateCart()

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
