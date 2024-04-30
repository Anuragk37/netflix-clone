import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";


const Header = () => {
   const navigate=useNavigate()
   const user=auth.currentUser

   const handleSignOut =()=>{
      console.log("clicked")
      signOut(auth).then(() => {

         navigate("/",{ replace: true })
       }).catch((error) => {
         console.log(error)
       });
   }



      useEffect(()=>{
         onAuthStateChanged(auth, (user) => {
            if (user) {
               // User is signed in, see docs for a list of available properties
               // https://firebase.google.com/docs/reference/js/auth.user
               const uid = user.uid;
               navigate("/browse")
               // ...
            } else {
               // User is signed out
               // ...
               navigate('/')
            }
            });
      },[])

  return (
    <div className={`absolute w-full py-3 bg-gradient-to-b from-black z-10 flex justify-between ${user ? 'px-24' : 'px-40'}`}>
      <img className='w-44' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
      {user?<div className='flex'>
         <img className='w-11 h-11' src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" alt="" />
         <button className='m-3' onClick={handleSignOut}>Sign Out</button>
      </div>:null}
    </div>

  )
}

export default Header
