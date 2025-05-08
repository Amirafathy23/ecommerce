import React, { useEffect, useState } from 'react'
import style from './Products.module.css'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'
import axios from 'axios'
import UseProducts from '../../hooks/useProducts'



export default function Products() {
let {isError , isLoading , isFetching , error , data}=  UseProducts()




  if (isLoading){

    return <Loader/>
  }
  if(isError){
    return <h2>fe error {error}</h2>
  }
 


  return <>
<div className="flex flex-wrap">

{data?.data?.data?.map((prod)=>{ return  <div key={prod.id} className='w-full sm:w-1/3 md:w-1/4 lg:w-1/6'>
     <div  className=" product px-6 py-10 group  ">
   <Link  to={`/productDetails/${prod.id}/${prod.category.name}`}>
     <img src={prod.imageCover} className='w-full' alt="" />
     <span className='text-green-700 font-light'>{prod.category.name}</span>
     <h3 className='text-xl font-normal'>{prod.title.split(' ').slice(0,2).join(' ')}</h3>
     <div className="flex justify-between">
       <span>{prod.price}  EGP</span>
       <span>15 <i className='fas fa-star text-yellow-300'></i></span>
     </div>
   </Link>
   <button  onClick={()=>{addProducrToCart(prod._id)}}   className='btn opacity-0 group-hover:opacity-100  transition-all'>Add To Cart</button>
   </div>
   </div> })}
  
</div>
  
  </>

}