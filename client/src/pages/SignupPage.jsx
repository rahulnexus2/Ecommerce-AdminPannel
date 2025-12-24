import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios'

const SignupPage = () => {
  const {pathname}=useLocation();
  const isAdmin=pathname.startsWith("/admin")

  const {
    register,
    handleSubmit, 
    formState: { errors },
    reset

    }=useForm({defaultValues:{
      roles: isAdmin? "admin" :"user" }});

  const [responseMsg,setresponseMsg]=useState("");

    
    const navigate=useNavigate();


  const onSumbit=async(data)=>{
   try{ 
    console.log(data)
    const res=await axios.post("http://localhost:8000/api/v1/auth/signup",data)
    console.log(res);
    setresponseMsg();

    alert("signup sucessfull")
    reset();
    if(isAdmin)
      navigate("/admin/login")
    if(isAdmin==false)
      navigate("/user/login")
   }catch(error)
   {
    
    console.log(error.response.data.message);
    setresponseMsg(error?.response?.data?.message);

    
   }
  }


  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-400  '>
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
          <h1 className='text-2xl mb-6 text-center font-semibold' >Signup</h1>
      
      <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSumbit)} >
      
      <input className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
       {...register("username",{required:"username is required",minLength:{
          value:4,
          message:"username must be atleast 4 characters"
      }})} placeholder='enter username' />
       {errors.username&& <p>{errors.username.message}</p>}
      
      <input className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
       {...register("email",{required:"email is required",pattern: {  
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
        message: 'Invalid email address format'
     }})} placeholder='enter email'/>
     {errors.email&& <p>{errors.email.message}</p>}
 {isAdmin&&<>
     <input className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
      {...register("adminkey",{required:"admin key is required "})} 
     placeholder='enter adminkey'/>
      {errors.adminkey&& <p>{errors.adminkey.message}</p>}</>

}
     <input type="password" className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
     {...register("password",{required:"password is required",minLength:{
        value:6,message:"password must be of 6 characters"
     }} )} placeholder='enter password' />
      {errors.password&& <p>{errors.password.message}</p>}
      {responseMsg&&<p className='text-red-600 text-center'>{responseMsg}</p>}
     <input className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
     type="submit" value="Submit Form"/>
      </form>
      </div>
    </div>
  )
}

export default SignupPage
