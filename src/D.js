import React from 'react'
import CartContext from "./Context";
import { useContext } from "react";
const D = () => {
    const {userName} = useContext(CartContext)
  return (
    <div>{userName}</div>
  )
}

export default D