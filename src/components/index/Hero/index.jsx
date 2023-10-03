"use client";
import React, { useState } from 'react'

export default function Hero() {
  const [first, setfirst] = useState("abc")

  function btnClick() {
    console.log("clicked")
    setfirst(first+1)
  }
  return (
    <div className='w-full flex flex-col items-center space-y-2 my-10 text-xl'>

      <p>some value == {first}</p>
      <button onClick={btnClick} className='border px-2 py-1 bg-black text-white hover:bg-slate-500'>add+1</button>

      <input
        type="text"
        name=""
        className='border'
        id="" 
        value={first}
        onChange={(e) => setfirst(e.target.value)}
      />
    </div>
  )
}
