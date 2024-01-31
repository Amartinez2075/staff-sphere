
import React, { useState } from 'react';
import Homepage from './js/homepage.js';
import Register from './js/register.js';

function App() {
  const [page, setPage] = useState('homepage'); // Set initial state to 'login'

  const renderPage = () => {
    if (page === 'homepage') {
      return <Homepage />;
    } else if (page === 'register') {
      return <Register />;
    }
    return null;
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;
