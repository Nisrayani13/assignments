import { useEffect, useState } from "react";

export function useCounter(n){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        const interval=setInterval(()=>{
            setCount((count)=>count+n);
        },n*1000)

        // clean up the timer before chainging to new n
        return ()=>{
            clearInterval(interval);
        }
    },[n])
    return count;
}