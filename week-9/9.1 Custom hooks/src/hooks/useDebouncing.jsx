import { useEffect } from "react";

export function useDebouncing(filter,n){
    useEffect(()=>{
        const timer=setTimeout(()=>{
            console.log(`your filter: ${filter}`);
        },n*1000)
        return ()=>{
            clearTimeout(timer);
        }
    },[n,filter])
    return filter;
}