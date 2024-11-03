import React from 'react'
import { useState } from 'react'

export const UseState = () => {
  const [count,setCount] =useState(0)
  return (
    <div style={{backgroundColor:"olivedrab"}}>
        <p style={{FontSize:30}}>{count}{count===5 && alert("hello plz stop")}</p>
        <button style={{backgroundColor:"blue"}} onClick={()=>setCount(count+1)}> Increment</button>
        <button style={{backgroundColor:"red"}}onClick={()=>setCount(count-1)}>Decrement</button>
        <button style={{backgroundColor:"yellowgreen"}}onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}
