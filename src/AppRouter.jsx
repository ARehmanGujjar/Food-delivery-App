import { createBrowserRouter} from "react-router-dom";
import About from "./About";
import Error from "./Error";
import App from "./App";
import RestaurantMenue from './RestaurantMenue';
import Restaurants from "./Restaurants";
import Basic from "./LoginForm";
import Deals from "./Utils/Deals";
import { lazy,Suspense } from "react";
import Shimmer from "./Shimmer";
lazy(()=>import('./Utils/Deals'))


const AppRouter=createBrowserRouter([
    {
      path:'/',
      element:<App/>,

      children:[{
        path:'/about',
        element:<About/>
      },{
        path:'restaurant/:id',
        element:<RestaurantMenue/>
        
      }
      ,{
        path:'/',
        element:<Restaurants/>
        
      }
      ,{
        path:'/Deals',
        element:<Suspense fallback={<Shimmer/>}><Deals/></Suspense>
        
      }],
      errorElement:<Error/>
    },
    {
      path:'/LoginForm',
      element:<Basic/>
    }
    
  ]);
  export default AppRouter;