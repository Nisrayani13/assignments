import { useState } from "react"
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { countAtom, evenSelector } from "./store/atoms/count"

function App() {
  
  return (
    <div>
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
    </div>
  )
}

function Count() {
  console.log("re-render")
  return <div>
    <CountRenderer/>
    <Buttons/>
  </div>
}

function CountRenderer() {
  const count=useRecoilValue(countAtom);
  return <div>
    <div>{count}</div>
    <EventCountReneder></EventCountReneder>
  </div>
}
function EventCountReneder(){
  const isEven=useRecoilValue(evenSelector);

  return <div>
    {(isEven===0)?"It is even":null}
  </div>
}

function Buttons() {
  console.log("re-render Buttons()")
  // const [count,setCount]=useRecoilState(countAtom);
  // setCount(count + 1), setCount(count - 1) 
  // for above kinda code the buttons also re-render 
  // but using the below code buttons donot rerender cause it is not using count directly from useRecoilState

  const setCount=useSetRecoilState(countAtom);
  return <div>
    <button onClick={() => {
      setCount((count)=>count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount((count)=>count - 1)
    }}>Decrease</button>
  </div>
}

export default App