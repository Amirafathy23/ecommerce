import React, { useContext, useEffect, useState } from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/images/freshcart-logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { CartContext } from '../../context/CartContext'
export default function Navbar() {
 let {numOfItems} =useContext(CartContext)


  let navigate=useNavigate()

let {userLogin , setuserLogin}= useContext(UserContext)
function logout(){
  localStorage.removeItem('userToken')
  setuserLogin(null)
  navigate('/signin')



}

    useEffect(()=>{

    })
  return <>

  <nav className='bg-gray-300 lg:fixed top-0 end-0 start-0 z-50'>
    <div className="p-3 flex flex-col lg:justify-between lg:flex-row lg:items-center">
      <div className="links flex flex-col lg:flex-row lg:items-center ">
        <img width={120} src={logo} alt="" />
        {userLogin !==null ? <> <ul className='flex flex-col lg:flex-row'>
          <li className='px-3 py-2'><NavLink to='/'>Home</NavLink></li>
          <li className='px-3 py-2'><NavLink to='products'>Products</NavLink></li>
          <li className='px-3 py-2'><NavLink to='brands'>Brands</NavLink></li>
          <li className='px-3 py-2'><NavLink to='categories'>Categories </NavLink></li>
          <li className='px-3 py-2 relative'><NavLink to='cart'>Cart  <span class="bg-pink-100 absolute top-[-8px] end-[-25px] text-pink-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">{numOfItems}</span>
          </NavLink></li>

        </ul></> : null }
       
      </div>
      <div className="icons">
        <ul className='flex flex-col lg:flex-row lg:items-center'>
       {userLogin == null ? <> <li className='px-3 py-2'><NavLink to='signup'>Register</NavLink></li>
        <li className='px-3 py-2'><NavLink to='signin'>Login</NavLink></li></> :  <li onClick={logout} className='px-3 py-2'><span className='cursor-pointer' to=''>Logout</span></li> }

      
        <li>
          <i className='fab px-3 fa-facebook'></i>
          <i className='fab px-3 fa-instagram'></i>
          <i className='fab px-3 fa-tiktok'></i>
          <i className='fab px-3 fa-youtube'></i>
        </li>

        </ul>
      </div>

    </div>

  </nav>
  
  
  
  
  </>
}
