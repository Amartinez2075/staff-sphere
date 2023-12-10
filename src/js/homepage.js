import React, { useState } from 'react';

function Homepage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h1>Welcome to Staff Sphere</h1> 
      <div>
        <div>
          <h2>Login:</h2>
          <input type="text" placeholder="Enter your login" />
        </div>
        <div>
          <h2>Password:</h2>
          <input type={showPassword ? "text" : "password"} placeholder="Enter your password" />
          <button onClick={togglePasswordVisibility}>
            {showPassword ? "Hide" : "Show"} Password
          </button>
        </div>
        <button>Sign In</button>
        <button>Create Login</button>
      </div>
    </div>
  );
}

export default Homepage;
