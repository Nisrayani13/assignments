import { useEffect, useState } from "react";
import { useMousePointer } from "./hooks/useMousePointer";
import { useCounter } from "./hooks/useCounter";
import { useDebouncing } from "./hooks/useDebouncing";

function App() {
  //     const { todos, loading } = useTodos(5);

  //   return (
  //     <>
  //       {loading ? (<div>Loading...</div>) : (
  //         todos.map(todo => <Track key={todo.id} todo={todo} />)
  //       )}
  //     </>
  //   );

  // const isOnline=useIsOnline();
  //     if(isOnline)return <div>You are back online</div>
  //     return <div>You are offline!!!!</div>

  // const mousePointer = useMousePointer();

  // return (
  //   <>
  //     Your mouse position is {mousePointer.x} {mousePointer.y}
  //   </>
  // );

  // const count=useCounter(2);
  // return <div>
  //   Timer is {count}
  // </div>

  const [filter,setfilter]=useState("");
  const debouncedValue=useDebouncing(filter,2);

  // whenever the debounced value changes, hit the backend 
  // useEffect(()=>{
  //   fetch("")
  // },[debouncedValue])
  return <div>

    <input type="text" onChange={(event)=>{
      setfilter(event.target.value)
    }}/>
  </div>
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default App;
