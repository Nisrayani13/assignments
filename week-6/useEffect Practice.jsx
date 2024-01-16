import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [todos,setTodos]=useState([]);

  useEffect(() => {
    setTimeout(()=>{
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      })
    },5000)
  }, [])

  return <div>
    {todos.map(function(todo){
      return <DisplayTodo key={todo.id} title={todo.title} description={todo.description}></DisplayTodo>
    })}
  </div>
}

function DisplayTodo({title,description}){
  return <div>
    <div>{title}</div>
    <div>{description}</div>
  </div>
}

export default App
