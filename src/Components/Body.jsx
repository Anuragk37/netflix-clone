import React, { useState ,createContext} from 'react'
import Login from './Login'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Browse from './Browse'

export const UserContext=createContext()
const Body = () => {
   const [user,setUser] = useState()

   const appRouter = createBrowserRouter([
      {
         path:"/",
         element : <Login setUser={setUser}/>
      },
      {
         path:"browse/",
         element : <Browse/>
      }
   ])


   console.log("bodyyyy",user)
  return (
   <UserContext.Provider value={[user,setUser]}>
      <div>
         <RouterProvider router={appRouter} />
      </div>
    </UserContext.Provider>
  )
}

export default Body
