/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  }
    
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    
     <div className='sm:w-full'>
       <RouterProvider router={router} />
     </div>
    
)



