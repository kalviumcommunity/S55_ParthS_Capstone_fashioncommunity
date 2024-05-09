import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';
import signup from './signup.jpg';

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [signupError, setSignupError] = useState('');

  const onSubmit = async (data) => {
    const { username, password } = data;

    try {
      if (password.length < 6) {
        setSignupError("Password should be more than 5 characters");
        return;
      }

      

      const response = await axios.post(`https://s55-parths-capstone-fashioncommunity.onrender.com/signup`, { username, password });
      if (response.status === 200) {
        console.log('Form submitted successfully');
        window.location.href = "/";
      } else {
        console.error('Signup failed');
        setSignupError('Signup failed');
      }
    } catch (err) {
      console.error('An error occurred during the signup:', err);
      setSignupError('An error occurred during the signup');
    }
  };

  return (
    <div className='page'>
      <img src={signup} className='image' alt="" />
      <div className="form-container">
        <h2>Sign Up!!</h2>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <label>Username:</label>
          <input type="text" {...register("username", { required: true })} />
          {errors.username && <p className="error">Username is required</p>}

          <label>Password:</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password && <p className="error">Password should be more than 5 characters</p>}

          <button type="submit" className="button">SIGNUP</button>
          <p className='option'>
            Already a user?
            <span className='option2'><Link to="/login">Login</Link></span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
