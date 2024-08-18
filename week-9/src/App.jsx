import { useEffect, useState } from "react";
import { useMousePointer } from "./hooks/useMousePointer";

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

  const mousePointer = useMousePointer();

  return (
    <>
      Your mouse position is {mousePointer.x} {mousePointer.y}
    </>
  );
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
