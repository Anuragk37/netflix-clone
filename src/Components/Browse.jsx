import React from 'react'

import { useContext } from 'react'
import { UserContext } from './Body'
import Header from './Header'

const Browse = () => {
   const [user,setUser] = useContext(UserContext)
  return (
    <div>
      <Header />
      <h1>{user ? `Logged in as ${user.uid}` : 'Not logged in'}</h1>
    </div>
  )
}

export default Browse
