import React, { useState } from 'react'

const Login = () => {

  const[email, setEmail]=useState("")
  const [password, setPassword]=useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Email is" ,email);
    console.log("Password is",password)

    setEmail("")
    setPassword("")
    
   
  }
    
  return (
    <div className='flex justify-center items-center h-screen w-screen ' > 
    <div className='border-2 border-emerald-600 p-20 '>
        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex flex-col items-center justify-center' >
            <input
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
             required 
             className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-2 px-5 rounded-full placeholder:text-gray-200' type="email" placeholder='Enter your Email' 
            />
            <input
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
             required 
             className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-2 px-5 rounded-full mt-5 placeholder:text-gray-200' type="password" placeholder='Enter your Password'
              />
            <button className='mt-5 text-white border-none outline-none bg-emerald-600 text-xl py-2 px-5 rounded-full'>Login</button>
        </form>

    </div>
    </div>
  )
}

export default Login
