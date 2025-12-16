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
    <div>
      <form onSubmit={handleSubmit(onSumbit)} >
      
      <input {...register("username",{required:"username is required",minLength:{
          value:4,
          message:"username must be atleast 4 characters"
      }})} placeholder='enter username' />
       {errors.username&& <p>{errors.username.message}</p>}
      
      <input {...register("email",{required:"email is required",pattern: {  
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
        message: 'Invalid email address format'
     }})} placeholder='enter email'/>
     {errors.email&& <p>{errors.email.message}</p>}

     <input {...register("adminkey",{required:"admin key is required "})} 
     placeholder='enter adminkey'/>
      {errors.adminkey&& <p>{errors.adminkey.message}</p>}

     <input {...register("password",{required:"password is required",minLength:{
        value:6,message:"password must be of 6 characters"
     }} )} placeholder='enter password' />
      {errors.password&& <p>{errors.password.message}</p>}
     <input type="submit" value="Submit Form"/>
      </form>
      
    </div>
  )
}

export default SignupPage
