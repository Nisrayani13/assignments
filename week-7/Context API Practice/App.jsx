import { useContext, useState } from "react"
import { CountContext } from "./Context";

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <CountContext.Provider value={{count,setCount}}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}

function Count({count, setCount}) {
  return <div>
    <CountRenderer/>
    <Buttons/>
  </div>
}

function CountRenderer() {
  const {count,setCount}=useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons() {
  const {count,setCount}=useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App