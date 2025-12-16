import React from 'react'
import {useForm} from 'react-hook-form'

const LoginPage = () => {
  const {
    register,
    handleSubmit, 
    formState: { errors }
    }=useForm();

  const onSumbit=(data)=>console.log(data)
  return (
    <div>
      <form onSubmit={handleSubmit(onSumbit)} >
      
      
      
      <input {...register("email",{required:"email is required",pattern: {  
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
        message: 'Invalid email address format'
     }})} placeholder='enter email'/>

     

     <input {...register("password",{required:"password is required",minLength:{
        value:6,message:"password must be of 6 characters"
     }} )} placeholder='enter password' />
     <input type="submit" value="Submit Form"/>
      </form>
      
    </div>
  )
}

export default LoginPage
