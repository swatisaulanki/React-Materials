import React, { useState } from 'react'

const Counters = () => {
  const[count,setCount]=useState(0)

  const handleInc=()=>{
    setCount(count+1)
  }
  const handleDec=()=>{
    setCount(count-1)
  }
  return (
    <div>
    <h1 style={{color:"yellow",fontWeight:"bold"}}>Counter</h1>
    <hr/>
    <h1 style={{color:"green"}}>{count}</h1>
      <button onClick={handleInc} style={{width:"5vw", color:"red", fontSize:"25px", fontWeight:"bold"}}>+</button>
      <button onClick={handleDec} style={{width:"5vw", color:"red", marginLeft:"5%", fontSize:"25px", fontWeight:"bold"}}>-</button>
    </div>
  )
}

export default Counters
