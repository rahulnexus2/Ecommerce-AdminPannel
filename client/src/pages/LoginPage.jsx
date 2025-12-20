import axios from 'axios';
import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import { useLocation } from 'react-router-dom';


const LoginPage = () => {
  const {
    register,
    handleSubmit, 
    formState: { errors },
    reset
    }=useForm();

    const {pathname}=useLocation();
    const [resMsg,setresMsg]=useState();

    const isAdmin=pathname.startsWith("/admin")
    const isUser=pathname.startsWith("/user")

    const onSumbit=async(data)=>{
      try{
      console.log(data);
     
        const res=await axios.post("http://localhost:8000/api/v1/auth/login",data);
        console.log(res);

        const token=res.data.token;
        console.log(token);
        localStorage.setItem("token",token);
        
      
      alert("login sucessful")
      
      reset();



    }catch(error){

        setresMsg(error?.response?.data?.message)
        console.log(resMsg);
        
        

    }
      

    }
  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-400  '>
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
      <h1 className='text-2xl mb-6 text-center font-semibold' >Login</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSumbit)} >
      
      
      
      <input className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
      {...register("email",{required:"email is required",pattern: {  
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
        message: 'Invalid email address format'
     }})} placeholder='enter email'/>

     

     <input type='password' className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
      {...register("password",{required:"password is required",minLength:{
        value:6,message:"password must be of 6 characters"
     }} )} placeholder='enter password' />
     {resMsg&&<p className='text-red-600 text-center'>{resMsg}</p>}
     <input className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
     type="submit" value="Submit Form"/>
      </form>
      
    </div>
    </div>
  )
}

export default LoginPage
