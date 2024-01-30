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
          <div className = "login"/>
          <h2>Login</h2>
          <input type="text" placeholder="Enter your login" />
        </div>
        <div className = "Password">
          <h2>Password</h2>
          <input type={showPassword ? "text" : "password"} placeholder="Enter your password" />
          <button onClick={togglePasswordVisibility}>
            {showPassword ? "Hide" : "Show"} Password
          </button>
        </div>

        <div className = "SignIn" >
        <button>Sign In</button>
        </div>
      </div>
      <div className = "CreateLogin">
        <button>Create Login</button>

      </div>
    </div>
  );
}

export default Homepage;
