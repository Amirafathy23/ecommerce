import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function UseProducts() {

    function getProducts(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
       }
       
      let response = useQuery({
        queryKey:'getAllProducts',
        queryFn: getProducts
      })
    
  return  response
}
