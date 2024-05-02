import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import CardShimmer from "./CardShimmer";
import { Link } from "react-router-dom";
const Restaurants=()=>{
    const [restaurants,setRestaurants]=useState(null);
    const [loading,setLoading]=useState(true)

    async function getRestaurents(){

        const data=await fetch('https://www.cheezious.com/api/menu?restId=54946&rest_brId=55931&delivery_type=0&source=');
        const json=await data.json();
        console.log(json?.data?.[0]?.all_section?.[2]?.all_sub_section?.[0]?.dish?.[0])
        const RestarauntsList=json?.data?.[0]?.all_section?.[2]?.all_sub_section?.[0]?.dish
        // console.log(RestarauntsList)
        setRestaurants(RestarauntsList)
        setLoading(false)
      
       }
       if(!restaurants){
        <Shimmer/>
       }
       useEffect(()=>{
        getRestaurents()
      
      },[])

   return(
   <>
        <h1 className="text-center">Hot Pizzas</h1>
       <div className="body">
          {loading?(<CardShimmer/>):
          restaurants.map((restaurent)=>(
            (
                
                <Link key={restaurent.id} className="link" to={'restaurant/'+restaurent.id}>
                   <div  className="card">
                    <img className="imgs" src={restaurent.img_url} alt="" />
                      <h1 >{restaurent.name}</h1>
                      <h4>{restaurent.desc}</h4>
                       <h4>Starting from: <span className="price">{restaurent.base_price}</span></h4>
                       <button className="btn order">Add to Cart</button>
                   </div>
                </Link>

            )

          
            ))
            
        }
      
        </div>
        </>


)


}
export default Restaurants;