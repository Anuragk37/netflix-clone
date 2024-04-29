import React, { useRef, useState } from 'react'
import Header from './Header'
import { formValidator } from '../utils/validator'

const Login = () => {

   const [isLogin,setIsLogin]=useState(true)
   const [errorMessage,setErrorMessage]=useState(null)
   const email = useRef(null)
   const password = useRef(null)
   
   const handleButtonClick=()=>{
      console.log(password.current.value)
      const message=formValidator(email.current.value,password.current.value)
      setErrorMessage(message)
   }
  return (
    <div className=''>
      <Header />
      <div className='absolute'>
         <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute bg-black bg-opacity-80 mx-auto left-0 right-0 my-36 p-12 text-white' action="">
         <h1 className='font-bold text-3xl'>{isLogin?"Sign In":"Sign Up"}</h1>
         {isLogin?null:<input type='text' placeholder='Full name' className='h-12 p-2 my-3 w-full bg-gray-700 bg-opacity-30 rounded-md border-2 border-gray-400'/>}
         <input ref={email} type="text" placeholder='email' className='h-12 p-2 my-3 w-full bg-gray-700 bg-opacity-30 rounded-md border-2 border-gray-400'/>
         <input ref={password} type="password" name="" id="" placeholder='password' className='h-12 p-2 my-3 w-full bg-gray-700 bg-opacity-30 rounded-md border-2 border-gray-400'/>
         <p className='text-red-600'>{errorMessage}</p>
         <button className='p-2  my-4 bg-red-700 w-full font-bold rounded-md' onClick={handleButtonClick}>{isLogin?"Sign In":"Sign Up"}</button>
         <p className='cursor-pointer' onClick={()=>{setIsLogin(!isLogin)}}>{isLogin?"New To Netflix ? SignUp now":"Already a user ? Sign In"}</p>
      </form>
    </div>
  )
}

export default Login
