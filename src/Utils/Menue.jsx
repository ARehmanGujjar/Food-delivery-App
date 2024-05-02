import { useState,useEffect } from "react";
const useMenue=(id)=>{
  
    const [Menue,setMenue]=useState();

    useEffect(()=>{
        async function RestaurentData(){
            const data=await fetch('https://www.cheezious.com/api/item?restId=54946&rest_brId=55931&dishId='+id)
            const json=await data.json();
            console.log(json)
            setMenue(json)
        }
        RestaurentData()

    },[])

    
    return Menue;
}
export default useMenue;