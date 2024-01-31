import React, { useState } from 'react';
import Register from './register'; // Adjust the path based on your project structure

function Homepage() {
  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h1>Welcome to Staff Sphere</h1>
      <div>
        {/* Login Section */}
        <div className="login">
          <h2>Login</h2>
          {/* Input field for the login */}
          <input type="text" placeholder="Enter your login" />
        </div>

        {/* Password Section */}
        <div className="Password">
          <h2>Password</h2>
          {/* Input field for the password with toggle button */}
          <input type={showPassword ? "text" : "password"} placeholder="Enter your password" />
          <button onClick={togglePasswordVisibility}>
            {/* Toggle button to show/hide password */}
            {showPassword ? "Hide" : "Show"} Password
          </button>
        </div>

        {/* Sign In Section */}
        <div className="SignIn">
          {/* Button for signing in */}
          <button>Sign In</button>
        </div>
      </div>

      {/* Register Component */}
      <Register />
    </div>
  );
}

export default Homepage;
