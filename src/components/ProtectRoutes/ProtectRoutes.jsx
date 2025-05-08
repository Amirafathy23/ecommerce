import React, { useEffect, useState } from 'react'
import style from './ProtectRoutes.module.css'
import { Navigate } from 'react-router-dom'

export default function ProtectRoutes(props) {
    const [count, setcount] = useState(0)

    if(localStorage.getItem('userToken')!==null){
      // access page home brands
      return  props.children

    }
    else{
     return <Navigate to='/signin'/>
    }

    useEffect(()=>{

    })
  return  <>

  
  
  
  </>
}
