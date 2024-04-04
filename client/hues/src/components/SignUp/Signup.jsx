import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Signup.css'
import signup from './signup.jpg'


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
    } catch (err) {
      console.error(err);
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
          {...register("password", {
            required: true,
            minLength: { value: 6, message: "Password should be more than 5 characters" }
          })}
        />

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