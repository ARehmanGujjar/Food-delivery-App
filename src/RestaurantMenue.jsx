import useMenue from "./Utils/Menue";
import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer";
const RestaurantMenue=()=>{
    const {id}=useParams();
    const Menue=useMenue(id)
        return !Menue?(<Shimmer/>):(
        <>
        <div>
        <p className="btn-small"> {(Menue?.data?.[0]?.category_name)}</p>
        <div className="flex">
        <h1>{Menue?.data?.[0]?.name}</h1>
        <button className="btn available">{Menue?.data?.[0]?.availability===1?'Available':'Not Available'}</button>
        </div>
        <div className="flex">
            <img className="img" src={Menue?.data?.[0]?.img_url} alt="image" />
        </div><div className="flex-col">

        <h4>{Menue?.data?.[0]?.desc}</h4>
        <h3>Price: {Menue?.data?.[0]?.base_price ? `${Menue.data[0].base_price}/- PKR` : "Item currently unavailable"}</h3>
        <button className="btn order">Add to Cart</button>
        </div>
        
        {/* {Menue.map((Menues)=>{
            <h1 key={Menues.id}>{Menues.name}</h1>
        })} */}
        </div>
        </>
    )
}
export default RestaurantMenue