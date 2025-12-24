import axios from 'axios';
import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import { useLocation,NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const {pathname}=useLocation();
  const isAdmin=pathname.startsWith("/admin")
  const isUser=pathname.startsWith("/user")

  const {
    register,
    handleSubmit, 
    formState: { errors },
    reset,  
    }=useForm();

    let navigate=useNavigate();

    
    const [resMsg,setresMsg]=useState();

    

    const onSumbit=async(data)=>{
      try{
      console.log(data);

     
        const res=await axios.post("http://localhost:8000/api/v1/auth/login",data);
        console.log(res);

        const token=res.data.token;
        console.log(token);
        localStorage.setItem("token",token);
        localStorage.setItem("admin",JSON.stringify(res.data.user.role))
        if(res.data.user.role=="admin")
          navigate("/admin/admindashboard")
        
          

      
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
      {errors.email&& <p>{errors.email.message}</p>}
     

     

     <input type='password' className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
      {...register("password",{required:"password is required"} )} placeholder='enter password' />
      {errors.password&& <p>{errors.password.message}</p>}
     {isAdmin && <p className='text-blue-600 underline'>{<NavLink to="/admin/forgotpassword">forgot password</NavLink>}</p>}
     {isUser && <p className='text-blue-600 underline'>{<NavLink to="/user/forgotpassword">forgot password</NavLink>}</p>}

     {isAdmin && <p className='text-red-600 underline'>{<NavLink to="/admin/resetpassword">reset password</NavLink>}</p>}
     {isUser && <p className='text-red-600 underline'>{<NavLink to="/user/resetpassword">reset password</NavLink>}</p>}
     
     {resMsg&&<p className='text-red-600 text-center'>{resMsg}</p>}
     <input className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
     type="submit" value="Submit Form"/>
      </form>
      
    </div>
    </div>
  )
}

export default LoginPage
