import { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import useOnline from "./Utils/UseOnline";
import { lazy,Suspense } from "react";
function App() {
   const Deals=lazy(()=>import('./Utils/Deals'))
  const [searchTxt,setSearchTxt]=useState()
   const online=useOnline();
   if(!online){
    return <h1>You are offline </h1>
   }
  return (
    <>
    
    <Navbar/>

      <div className="searchbox">
        <input type="search" name="searchbar" id="searchbar" value={searchTxt} onChange={(e)=>{setSearchTxt(e.target.value)}}/>
        <button type="submit" className="btn" onClick={()=>{

        // const data=filterData(searchTxt,restaurants)
        // setRestaurants(data)
      setSearchTxt("")}
    }>
          Search
        </button>
      </div>
      <Outlet/>
      {/* <Restaurants/> */}
      {/* <div className="body">
        {restaurent.map((restaurent) => {
          return (
            <RestaurentCard
              key={restaurent.info.id}
              restaurent={{restaurent }}
            />
          );
        })}
      </div> */}

       



    </>
  );
}



export default App;
