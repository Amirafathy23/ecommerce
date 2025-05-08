import React, { useContext, useEffect, useState } from 'react'
import style from './RecentProducts.module.css'
import axios from 'axios'
import Loader from '../Loader/Loader'
import { Link } from 'react-router-dom'
import { CounterContext } from '../../context/CounterContext'
import { CartContext } from '../../context/CartContext'
import toast from 'react-hot-toast'
import { useQuery } from '@tanstack/react-query'
import UseProducts from '../../hooks/useProducts'

export default function RecentProducts() {
   // async function getProducts(){
  //   let {data}= await axios.get('https://ecommerce.routemisr.com/api/v1/products')
  //   console.log(data.data);
  //   setProduct(data.data)
    
  // }
 let {addToCart}= useContext(CartContext)

async function addProducrToCart(id){
    let {data}=  await addToCart(id)

    console.log(data);
    if(data.status=='success'){
      toast.success(data.message , {
        position: "top-right",
        
      })
      
     // resp tmam
    }
    else{
      toast.error(data.message , {
        position: "top-right",
        
      })
      
      // error

    }
    
  
 }

let {isError , isFetching , isLoading , data , error}= UseProducts()

console.log('data' , data);

console.log('is error' , isError);

console.log('is featching' , isFetching);

console.log('loading' , isLoading);



  if (isLoading){

    return <Loader/>
  }
  if(isError){
    return <h2>fe error</h2>
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

//   return <>
  
  
  
//   {product.length > 0 ? <div className=" py-10 flex  flex-wrap  ">
  

//   {product.map((prod)=>{ return  <div key={prod.id} className='w-full sm:w-1/3 md:w-1/4 lg:w-1/6'>
//     <div  className=" product px-6 py-10 group  ">
//   <Link  to={`/productDetails/${prod.id}/${prod.category.name}`}>
//     <img src={prod.imageCover} className='w-full' alt="" />
//     <span className='text-green-700 font-light'>{prod.category.name}</span>
//     <h3 className='text-xl font-normal'>{prod.title.split(' ').slice(0,2).join(' ')}</h3>
//     <div className="flex justify-between">
//       <span>{prod.price}  EGP</span>
//       <span>15 <i className='fas fa-star text-yellow-300'></i></span>
//     </div>
//   </Link>
//   <button  onClick={()=>{addProducrToCart(prod._id)}}   className='btn opacity-0 group-hover:opacity-100  transition-all'>Add To Cart</button>
//   </div>
//   </div> })}




// </div> :  <Loader/>}
//   </>
}







