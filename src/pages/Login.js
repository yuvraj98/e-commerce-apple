// src/components/Login.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data);
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-richblack-800">
      <div className="relative w-96 h-130">
        <div className="absolute -left-20 -top-20 w-52 h-52 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full"></div>
        <div className="absolute -right-10 -bottom-20 w-52 h-52 bg-gradient-to-br from-red-600 to-yellow-500 rounded-full"></div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative z-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 shadow-lg rounded-lg p-8"
        >
          <h3 className="text-2xl font-semibold text-white text-center">Login Here</h3>

          <label htmlFor="username" className="block mt-6 text-sm font-medium text-white">Username</label>
          <input
            type="text"
            placeholder="Email or Phone"
            id="username"
            {...register('username', { required: 'Username is required' })}
            className="block w-full mt-2 p-3 bg-white bg-opacity-20 text-white rounded-md placeholder-gray-300"
          />
          {errors.username && <p className="mt-1 text-red-500 text-sm">{errors.username.message}</p>}

          <label htmlFor="password" className="block mt-6 text-sm font-medium text-white">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            {...register('password', { required: 'Password is required' })}
            className="block w-full mt-2 p-3 bg-white bg-opacity-20 text-white rounded-md placeholder-gray-300"
          />
          {errors.password && <p className="mt-1 text-red-500 text-sm">{errors.password.message}</p>}

          <div className="flex justify-end mt-2">
            <Link to="/forgot-password" className="text-sm text-richblack-50 hover:underline">Forgot Password?</Link>
          </div>

          <button type="submit" className="mt-6 w-full p-3 bg-white text-richblack-900 font-semibold rounded-md">Log In</button>

          <div className="mt-6 text-center text-white">
            Not registered? 
            <Link to="/signup" className="ml-1 text-blue-400 hover:underline">Create an account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
