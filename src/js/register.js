import React, { useState } from 'react';

const Register = () => {
  // State to manage the username input
  const [username, setUsername] = useState('');
  // State to manage the password input
  const [password, setPassword] = useState('');

  // Function to handle the registration process
  const handleRegister = async () => {
    try {
      // Send a POST request to the server for registration
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Send the username and password as JSON in the request body
        body: JSON.stringify({ username, password }),
      });

      // Parse the response as JSON
      const data = await response.json();

      // Save the token in local storage or state for future requests
      console.log('Token:', data.token);
    } catch (error) {
      // Handle any errors that occur during the registration process
      console.error('Registration failed:', error.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {/* Input field for the username */}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {/* Input field for the password */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* Button to trigger the registration process */}
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
