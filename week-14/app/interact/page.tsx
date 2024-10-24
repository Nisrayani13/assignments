import React from 'react'
import Button from '../components/Button'

export default function page() {

  return (
    <div>
      <div className='font-semibold text-xl mb-5'>Welcome to Interactive Page</div>
      <p className='mb-3'>This route features a count button that demonstrates the power of client-side interactivity in Next.js. Click the button and see the count go up! This interactive feature is powered by the "use client" directive in Next.js, which allows this component to be rendered on the client-side.</p>
      <Button></Button>
    </div>
  )
}
