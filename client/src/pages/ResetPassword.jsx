import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/auth/reset-password/${token}`,
        data
      );

      setMessage(res.data.message);
      setError("");

      // redirect to login after success
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Invalid or expired link");
      setMessage("");
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="password"
          placeholder="New password"
          {...register("password", { required: true, minLength: 6 })}
        />

        <button type="submit">Reset Password</button>
      </form>

      {message && <p className=" text-green-600" >{message}</p>}
      {error && <p className="text-red-600">{error}</p>}
      
    </div>
  );
};

export default ResetPassword;
