import React, { useEffect, useRef, useState } from 'react'
import style from './Categories.module.css'
import { Helmet } from 'react-helmet'

export default function Categories() {
    const [count, setcount] = useState(0)
    // const [render, setrender] = useState(0)
     let render = useRef(0)
console.log(render.current);
let myinput= useRef('')



    useEffect(()=>{
      console.log(myinput.current);
      myinput.current.focus()
     
    }  ,[])

  
  return <>
  <Helmet>
                <title>Fresh Cart - Categories</title>
            </Helmet>
  <h2>Categories Page</h2>
  <input ref={myinput} type="text" name="" id="" />
  <h3>Count : {count}</h3>
  <h3>render {render.current}</h3>
  <button onClick={()=>{setcount(count+1)}} class='btn'>change count +</button>
  <button onClick={()=>{setcount(count-1)}} class='btn'>change count -</button>

  </>
}
