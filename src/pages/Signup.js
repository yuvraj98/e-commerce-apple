import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async data => {
    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      const result = await response.json();
      console.log(result);
      // Redirect to login page or home page after successful signup
      navigate('/login');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-richblack-800 py-12">
      <div className="relative w-full max-w-lg mx-auto">
        <div className="absolute -left-20 -top-10 w-40 h-40 bg-gradient-to-br from-richblack-900 to-richblack-800 rounded-full"></div>
        <div className="absolute -right-10 -bottom-20 w-40 h-40 bg-gradient-to-br from-red-600 to-yellow-500 rounded-full"></div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative z-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 shadow-lg rounded-lg p-8"
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-4">Signup Here</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstname" className="block text-sm font-medium text-white">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                id="firstname"
                {...register('firstname', { required: 'First Name is required' })}
                className="block w-full mt-1 p-2 bg-white bg-opacity-20 text-white rounded-md placeholder-gray-300"
              />
              {errors.firstname && <p className="mt-1 text-red-500 text-sm">{errors.firstname.message}</p>}
            </div>
            <div>
              <label htmlFor="lastname" className="block text-sm font-medium text-white">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                id="lastname"
                {...register('lastname', { required: 'Last Name is required' })}
                className="block w-full mt-1 p-2 bg-white bg-opacity-20 text-white rounded-md placeholder-gray-300"
              />
              {errors.lastname && <p className="mt-1 text-red-500 text-sm">{errors.lastname.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                {...register('email', { required: 'Email is required' })}
                className="block w-full mt-1 p-2 bg-white bg-opacity-20 text-white rounded-md placeholder-gray-300"
              />
              {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                {...register('password', { required: 'Password is required' })}
                className="block w-full mt-1 p-2 bg-white bg-opacity-20 text-white rounded-md placeholder-gray-300"
              />
              {errors.password && <p className="mt-1 text-red-500 text-sm">{errors.password.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-white">Gender</label>
              <select
                id="gender"
                {...register('gender', { required: 'Gender is required' })}
                className="block w-full mt-1 p-2 bg-white bg-opacity-20 text-white rounded-md placeholder-gray-300"
              >
                <option className="text-richblue-900" value="">Select Gender</option>
                <option className="text-richblue-900" value="male">Male</option>
                <option className="text-richblue-900" value="female">Female</option>
                <option className="text-richblue-900" value="other">Other</option>
              </select>
              {errors.gender && <p className="mt-1 text-red-500 text-sm">{errors.gender.message}</p>}
            </div>
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-white">Date of Birth</label>
              <input
                type="date"
                id="dob"
                {...register('dob', { required: 'Date of Birth is required' })}
                className="block w-full mt-1 p-2 bg-white bg-opacity-20 text-white rounded-md placeholder-gray-300"
              />
              {errors.dob && <p className="mt-1 text-red-500 text-sm">{errors.dob.message}</p>}
            </div>
          </div>

          <label htmlFor="contactno" className="block mt-4 text-sm font-medium text-white">Contact Number</label>
          <input
            type="text"
            placeholder="Contact Number"
            id="contactno"
            {...register('contactno', { required: 'Contact Number is required' })}
            className="block w-full mt-1 p-2 bg-white bg-opacity-20 text-white rounded-md placeholder-gray-300"
          />
          {errors.contactno && <p className="mt-1 text-red-500 text-sm">{errors.contactno.message}</p>}

          <button type="submit" className="mt-6 w-full p-3 bg-white text-gray-900 font-semibold rounded-md">Sign Up</button>

          <div className="mt-6 text-center text-white">
            <p className="mb-2">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="text-blue-500 hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
