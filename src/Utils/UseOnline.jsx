import { useEffect, useState } from "react";

const useOnline=()=>{
    const handleOnline=()=>{
        setisOnline(true)
    }
    const handleOffline=()=>{
        setisOnline(false)
    }
  const [isOnline,setisOnline]=useState(true)
  useEffect(()=>{
    window.addEventListener('online',handleOnline)
    window.addEventListener('offline',handleOffline)
    return()=>{
        window.removeEventListener('online',handleOnline)
        window.removeEventListener('online',handleOffline)
    }

  },[])
   return isOnline;


}
export default useOnline;