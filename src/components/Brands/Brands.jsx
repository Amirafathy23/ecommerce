import React, { useContext, useEffect, useState } from 'react'
import style from './Brands.module.css'
import { CounterContext } from '../../context/CounterContext';
import { useFormik } from 'formik';
import axios from 'axios';
import {Helmet} from "react-helmet";
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loader from '../Loader/Loader';
export default function Brands() {

  function getAllBrands(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  }

 let {data , isError , error , isFetching , isLoading}= useQuery({
    queryKey:'getBrands' , 
    queryFn:getAllBrands
  })
  console.log(data?.data?.data);
  
  if(isLoading){
    return <Loader/>
  }
  if(isError){
    return <h2>fe error {error}</h2>
  }



  return<>

<Helmet>
                <title>Fresh Cart - Brands</title>
            </Helmet>

<div className="flex flex-wrap">
  
{data?.data?.data?.map((brand)=>{ return <div>
            <img src={brand.image} className='w-full' alt={brand.title} />
            {/* <p className='text-2xl'>{brand.name}</p> */}
          </div>})}
</div>
  </>
}
