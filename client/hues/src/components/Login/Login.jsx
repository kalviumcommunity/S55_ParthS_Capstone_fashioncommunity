import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import Img from "./login.jpg";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');

  const onSubmit = async (data) => {
    const { username, password } = data;
    try {
      if (password.length < 6) {
        setLoginError("Password should be more than 5 characters");
        return;
      }
      const response = await axios.post(`https://s55-parths-capstone-fashioncommunity.onrender.com/login`, { username, password });
      if (response.status === 200) {
        console.log('Login successful');
        navigate("/");
      } else {
        console.error('Login failed');
        setLoginError('Login failed');
      }
    } catch (err) {
      console.error('An error occurred during the login:', err);
      setLoginError('An error occurred during the login');
    }
  };

  return (
    <div className="page">
      <img src={Img} className="image" alt="" />
      <div className="form-container">
        <h2>Login !!</h2>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <label>Username:</label>
          <input type="text" {...register("username", { required: true })} />
          {errors.username && <p className="error">Username is required</p>}

          <label>Password:</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: {
                value: 6,
                message: "Password should be more than 5 characters",
              },
            })}
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}

          <button type="submit" className="button">
            LOGIN
          </button>
          <p className="option">
            Not a user?
            <span className="option2">
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
