import React, { useContext, useEffect, useState } from 'react'
import style from './Home.module.css'
import Products from '../Products/Products'
import Cart from '../Cart/Cart'
import Brands from './../Brands/Brands';
import { CounterContext } from '../../context/CounterContext';
import axios from 'axios';
import RecentProducts from '../RecentProducts/RecentProducts';
import CategorySlider from '../CategorySlider/CategorySlider';
import Mainslider from '../Mainslider/Mainslider';
export default function Home() {




  return <>
  <Mainslider/>
  <CategorySlider/>

  <RecentProducts/>


  
  
  </>
}
