import React, { useState } from 'react'

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt:', formData)
    // Add your login logic here
  }

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body p-8">
          <h2 className="card-title justify-center text-2xl font-bold mb-8">Login</h2>
          
          <form onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className="form-control mb-6">
              <label className="label pb-2">
                <span className="label-text font-medium">Username</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                className="input input-bordered input-md w-full"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-control mb-6">
              <label className="label pb-2">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered input-md w-full"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-control mb-8">
              <label className="label pb-2">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered input-md w-full"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Login Button */}
            <div className="form-control mt-2">
              <button type="submit" className="btn btn-primary btn-md w-full">
                Login
              </button>
            </div>
          </form>

          {/* Additional Links */}
          <div className="text-center mt-8 pt-4 border-t border-base-300">
            <a href="#" className="link link-hover text-sm font-medium">
              Forgot password?
            </a>
          </div>
          
          <div className="text-center mt-4">
            <span className="text-sm">
              Don't have an account?{' '}
              <a href="#" className="link link-hover font-medium">
                Sign up
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage