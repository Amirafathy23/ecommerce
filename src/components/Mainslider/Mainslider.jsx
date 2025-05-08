import React, { useEffect, useState } from 'react'
import style from './Mainslider.module.css'
import Slider from "react-slick";
import sliderImg1 from '../../assets/images/slider-image-3.jpeg'
import sliderImg2 from '../../assets/images/slider-image-2.jpeg'
import sliderImg3 from '../../assets/images/slider-image-1.jpeg'
import img1 from '../../assets/images/grocery-banner.png'
import img2 from '../../assets/images/grocery-banner-2.jpeg'

export default function Mainslider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    const [count, setcount] = useState(0)

    useEffect(()=>{

    })
  return <>

  <div className="flex">
    <div className="w-3/4">
    <Slider {...settings}>
      <img className='h-[400px]' src={sliderImg1} alt="freshcartimg" />
      <img className='h-[400px]' src={sliderImg2} alt="freshcartimg" />

      <img className='h-[400px]' src={sliderImg3} alt="freshcartimg" />

    

    </Slider>

    </div>

    <div className="w-1/4">
    <img src={img1} className='h-[200px]' alt="" />
    <img src={img2} className='h-[200px]' alt="" />
    </div>

  </div>
  
  
  </>
}
