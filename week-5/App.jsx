import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateCard } from './components/CreateCard'

function App() {
  const name="Nishu";
  const about="A student";
  const interests=["sleeping", "eating", "scrolling"];

  return ( 
    <div>
      <CreateCard name={name} about={about} interests={interests}></CreateCard>
    </div>
  )
}

export default App
