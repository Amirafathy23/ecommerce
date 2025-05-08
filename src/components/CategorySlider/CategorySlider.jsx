import React, { useEffect, useState } from 'react'
import style from './CategorySlider.module.css'
import axios from 'axios'
import Slider from "react-slick";

export default function CategorySlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    
  };
    const [count, setcount] = useState(0)

    let [categoryProd , setcategoryProd]=useState([])
    async function getProducts(){
  
     
      let {data}= await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
      console.log(data.data);
      setcategoryProd(data.data)
      
    }

    useEffect(()=>{
      getProducts()
    } , [])
  return <>
  
  

  <Slider {...settings}>
  {categoryProd.map(( prod , index)=>{ return <div key={index}>
    <img src={prod.image} className='h-[200px] w-full' alt="" />
    <h3>{prod.name}</h3>

  </div>})}
     </Slider>
  </>
}
