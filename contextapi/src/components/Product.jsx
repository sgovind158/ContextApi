import React from 'react'
import Cart from './Cart'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'


const Product = () => {
  const {isAuthorized,login,logout} = useContext(AuthContext)

  return (
    <div>
      product: {isAuthorized ?"Login":"Logout"}
      <Cart/>
    </div>
  )
}

export default Product
