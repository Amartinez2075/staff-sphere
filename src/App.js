import React, { useState } from 'react';
import Homepage from './js/homepage';

function App() {
  const [page] = useState('homepage');

  const renderPage = () => {
    if (page === 'homepage') {
      return <Homepage />;
    }
    return null;
  };

  return (
    <div>
    <Homepage setpage="setpage">
      {renderPage()}
    </Homepage>
    </div>
  );
}

export default App;
