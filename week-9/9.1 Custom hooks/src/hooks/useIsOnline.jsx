export function useIsOnline(){
    const [isOnline,setIsOnline]=useState(window.navigator.onLine);
    useEffect(()=>{
        setIsOnline(window.navigator.onLine);
    },[window.navigator.onLine]);
    return isOnline;
}