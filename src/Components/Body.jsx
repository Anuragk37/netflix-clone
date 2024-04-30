import React, { useState ,createContext} from 'react'
import Login from './Login'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Browse from './Browse'

const Body = () => {
   const [user,setUser] = useState()

   const appRouter = createBrowserRouter([
      {
         path:"/",
         element : <Login/>
      },
      {
         path:"browse/",
         element : <Browse/>
      }
   ])


   console.log("bodyyyy",user)
  return (
      <div>
         <RouterProvider router={appRouter} />
      </div>
  )
}

export default Body
