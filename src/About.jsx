import Shimmer from "./Shimmer";
import { useState,useEffect } from "react"
const About=()=>{
  const [loading,setLoading]=useState(true)
  const [countryCodes, setCountryCodes] = useState([]);

    useEffect(() => {
      async function fetchCountryCodes() {
        try {
          const response = await fetch("https://www.zomato.com/webroutes/auth/init");
          const data = await response.json();
          
          if (data.success && data.all_country_code) {
            setCountryCodes(data.all_country_code);
          } else {
            console.error("Failed to fetch country codes:", data);
          }
        } catch (error) {
          console.error("Error fetching country codes:", error);
        }
        setLoading(false)
      }
      
        
  
      fetchCountryCodes();
    }, []);

  return( <>
  <div>
    <h1 className="text-center">About Us</h1>
    <p className="text-center">We are a group of Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas possimus neque blanditiis ea ducimus cumque quisquam quis optio sequi reiciendis beatae nobis sunt recusandae, vitae magni vel, eaque iure, ratione eos! Voluptas unde itaque, quae, nihil nobis veniam pariatur nisi aliquam quo laborum sint, doloribus laudantium. Deleniti cum animi perferendis.
    </p>
    <h1 className="text-center">We are available at these countries:</h1>
    
    <div className="country">
        {loading?(<Shimmer/>):
        countryCodes.map(country => (
            <div className="countries" style={{fontStyle:'italic',fontWeight:'bold'}} key={country.countryId}>{country.name} </div>
        ))}
          </div>
  </div>
  </>
  )
}

export default About