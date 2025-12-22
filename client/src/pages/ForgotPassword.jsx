import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'

const ForgotPassword = () => {
 const { register, handleSubmit,formState:{errors} } = useForm();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/forgot-password",
        data
      );
      
      

      setMessage(res.data.message);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message );
      setMessage("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>forgot password</h1>
        <input placeholder='enter email ' {...register("email",{required:"email is required"})} />
       {errors.email&&<p className='text-red-600 text-center'>{errors.email.message}</p>}




    <input className=" bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
     type="submit" value="Submit Form"/>
      </form>
      {message && <p className='text-green-600'>{message}</p>}
      {error && <p className='text-red-600'>{error}</p>}

      
    </div>
  )
}

export default ForgotPassword
