import { Link } from "react-router-dom"
import useOnline from "./Utils/UseOnline"
import { useContext } from "react"
import Context from "./Context"
import {useSelector} from 'react-redux'


const Navbar=()=>{
  const {user}=useContext(Context);
  const cartItems=useSelector(Store=>{Store.cart.items})  
return (<>
<div className="Navbar" style={{display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '1px solid black',
  borderRadius: '10px', margin:"5px",
  padding:'5px'}}>
    <h2 className="logo">Logo</h2>
    <ul className="flex">
        <Link style={{textDecoration:'none', color:'black',marginLeft:'2px'}} to={'/'}>Home</Link>
        <Link style={{textDecoration:'none', color:'black',marginLeft:'8px'}}to={'/About'}>About</Link>
        <Link style={{textDecoration:'none', color:'black',marginLeft:'8px'}}to={'/Deals'}>Deals</Link>
        <li>Cart items- {cartItems.length}</li>
    </ul>
    <h2>{user.name}</h2>
    <h1>{useOnline?'👊':'offline'}</h1>
    <button className="btn navBtn"><Link  to={'/LoginForm'}>Login</Link></button>
</div>
</>)

}
export default Navbar