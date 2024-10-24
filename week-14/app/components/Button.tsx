"use client"

import { useState } from "react"

export default function Button() {
    const [count,setCount]=useState(0);
    
    return (
        <button onClick={()=>setCount((count)=>count+1)}
            className="border-2 border-gray-700 rounded-md px-2 py-1"
        >
            Count is {count}
        </button>
    )
}
