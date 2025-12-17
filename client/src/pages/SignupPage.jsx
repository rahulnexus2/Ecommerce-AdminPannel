import React from 'react'
import {useForm} from 'react-hook-form'

const SignupPage = () => {
  const {
    register,
    handleSubmit, 
    formState: { errors }
    }=useForm();

  const onSumbit=(data)=>console.log(data)
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

     <input className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
      {...register("adminkey",{required:"admin key is required "})} 
     placeholder='enter adminkey'/>
      {errors.adminkey&& <p>{errors.adminkey.message}</p>}

     <input className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
     {...register("password",{required:"password is required",minLength:{
        value:6,message:"password must be of 6 characters"
     }} )} placeholder='enter password' />
      {errors.password&& <p>{errors.password.message}</p>}
     <input className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
     type="submit" value="Submit Form"/>
      </form>
      </div>
    </div>
  )
}

export default SignupPage
