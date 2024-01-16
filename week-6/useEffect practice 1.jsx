import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [id,setId]=useState(1);

  return <>
    <button onClick={()=>setId(1)}>1</button>
    <button onClick={()=>setId(2)}>2</button>
    <button onClick={()=>setId(3)}>3</button>
    <button onClick={()=>setId(4)}>4</button>
    <Todo id={id}></Todo>
  </>
  
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then(async function (res) {
        let json = await res.json();
        setTodo(json.todo);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      Id: {id}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1> {todo.title} </h1>
          <h2> {todo.description} </h2>
        </>
      )}
    </div>
  );
}

export default App
