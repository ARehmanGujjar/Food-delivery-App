import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./AppRouter";
// import ReactDOM from 'react-dom/client'
import "./index.css";
import { Provider } from "react-redux";
import Store from "./Utils/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      {/* { <App />} */}
      </Provider>
    <RouterProvider router={AppRouter}></RouterProvider>
  </React.StrictMode>
);
// const AppRouter=createBrowserRouter([
//   {
//     path:'/',
//     element:<App/>
//   },
//   {
//     path:'/about',
//     element:<About/>
//   }
// ]);
