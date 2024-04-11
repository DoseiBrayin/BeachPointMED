import { useState } from "react"

export const UseStateCart = () => {
    const [cartState, setCartState] = useState(true)
    function handleCart(){
    setCartState(!cartState)
  }
  return  {
    cartState,
    handleCart
}
}
