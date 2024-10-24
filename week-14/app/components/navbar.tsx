import React from 'react'

export default function Navbar() {
  return (
    <div className='flex gap-x-40'>
      <Buttons title='Home'></Buttons>
      <Buttons title='Server Page'></Buttons>
      <Buttons title='Client Page'></Buttons>
    </div>
  )
}


function Buttons({title}:{title:string}){
    return <div>
        <button className='border border-2 border-gray-300 rounded-lg px-4 py-1.5 mb-16'> {title} </button>
    </div>
}