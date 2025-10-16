
const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt:', formData)
    // Add your login logic here
  }

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body p-8">
          <h2 className="card-title justify-center text-2xl font-bold mb-8">Sing Up</h2>
          
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
                required
              />
            </div>

            {/* Login Button */}
            <div className="form-control mt-2">
              <button type="submit" className="btn btn-primary btn-md w-full">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register