import { useForm } from "react-hook-form";
import React from 'react'

const Login = () => {
    const {
      register,
      handleSubmit,
      watch,
      formState:{errors}
    }=useForm();

    const onSubmit=(data)=>console.log(data)

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
       

          <input
        placeholder="Enter email"
         {...register("email",
          {
           required: "Email is required",
           pattern: {
           value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
           message: "Please enter a valid email address"
          }
          }
          )}
          />
          {errors.email && (
  <p className="text-red-600">{errors.email.message}</p>
)}

          <input placeholder="Enter password Here"
          {...register("password",
            {
              required:"password is required",
              minLength: {
              value: 6,
              message: "Password must be at least 6 characters long"
            }
            }
          )
          } 
          />
          {errors.password && (
  <p className="text-red-600">{errors.password.message}</p>
)}
          <input type="submit" />
      
      
      </form>
      
    </div>
  )
}

export default Login
