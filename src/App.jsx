import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { lazy } from 'react';
import { Offline, Online } from "react-detect-offline";
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import Cart from './components/Cart/Cart';
import Categories from './components/Categories/Categories';
import Notfound from './components/Notfound/Notfound';
import CounterContextProvider from './context/CounterContext'
import UserContextProvider from './context/UserContext'
import ProtectRoutes from './components/ProtectRoutes/ProtectRoutes'
import ProductDetails from './components/ProductDetails/ProductDetails';
import CartContextProvider from './context/CartContext'
import Payment from './components/Payment/Payment';
import AllOrders from './components/AllOrders/AllOrders';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Loader from './components/Loader/Loader';
// import Brands from './components/Brands/Brands';

// import Products from './components/Products/Products';

const Products = lazy(() => import('./components/Products/Products'));
const Brands = lazy(() => import('./components/Brands/Brands'));


let query= new QueryClient()

 let routes= createBrowserRouter([
  {path:'' , element:<Layout/> , children:[
    {index:true , element:<ProtectRoutes><Home/></ProtectRoutes>},
    {path:'signup' , element:<Signup/>},
    {path:'signin' , element:<Signin/>},
    {path:'products' , element:<ProtectRoutes><Suspense fallback={<Loader/>}><Products/></Suspense></ProtectRoutes>},
    {path:'cart' , element:<ProtectRoutes><Cart/></ProtectRoutes>},
    
    {path:'payment' , element:<ProtectRoutes><Payment/></ProtectRoutes>},
    {path:'allorders' , element:<ProtectRoutes><AllOrders/></ProtectRoutes>},


    {path:'productDetails/:id/:category' , element:<ProtectRoutes><ProductDetails/></ProtectRoutes>},


    {path:'brands' , element:<ProtectRoutes><Suspense fallback={<Loader/>}><Brands/></Suspense></ProtectRoutes>},
    {path:'categories' , element:<ProtectRoutes><Categories/></ProtectRoutes>},
    {path:'*' , element:<Notfound/>},
  ]},


 ])

 

function App() {
  const [count, setCount] = useState(0)

  return <>

  <QueryClientProvider client={query} >
  <CartContextProvider>

<CounterContextProvider>
  <UserContextProvider>

  
    {/* app */}
  <RouterProvider router={routes}></RouterProvider>
  <ReactQueryDevtools/>
<div className="fixed bottom-0 start-2 shadow-lg rounded-md  bg-red-300">
{/* <Online>Only shown when you're online</Online> */}
<Offline>NetWork issue</Offline>
</div>




  </UserContextProvider>
  </CounterContextProvider>

</CartContextProvider>

  </QueryClientProvider>
 






  
  
  </>
}

export default App
