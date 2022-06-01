import React from 'react'
import Wishlist from './Wishlist'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { CartContext } from '../context/CartContext'
import { ThemeContest } from '../context/Themecontext'

const Navbar = () => {
  const {isAuthorized,login,logout} = useContext( AuthContext)
  const {buy} = useContext(CartContext)
  const {isLight,toggleTheme} = useContext(ThemeContest)

  return (
    <div>
      Navbar
      <button  onClick={()=>{
         if(isAuthorized){
           logout()
         }else{
           login ("G","S")
         }
      }}>
        {isAuthorized ?"Logout":"Login"}
      </button>

      <button onClick={buy}>Buy</button>
  
      <button onClick={toggleTheme}>{`Make ${isLight ?"Dark":"light"}`}</button>

        {isAuthorized && <Wishlist/>}

    </div>
  )
}

export default Navbar
