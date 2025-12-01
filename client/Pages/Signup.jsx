import React from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Enter username"
          {...register("username", {
            required: { message: "username is required" },
            maxLength: {
              value: 10,
              message: "username cannot exceed 10 characters",
            },
            minLength: {
              value: 5,
              message: "username must be atleast 5 characters",
            },
          })}
        />
        {errors.username && (
          <p className="text-red-600">{errors.username.message}</p>
        )}
        <input
          placeholder="Enter email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}

        <input
          placeholder="Enter password Here"
          {...register("password", {
            required: "password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-600">{errors.password.message}</p>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Signup;
