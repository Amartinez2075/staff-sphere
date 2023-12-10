import React, { useState } from 'react';
import Homepage from './js/homepage';
import WorkDatabase from './js/wrk-database';

function App() {
  const [page] = useState('homepage');

  const renderPage = () => {
    if (page === 'homepage') {
      return <Homepage />;
    } else if (page === 'work-database') { 
      return <WorkDatabase />;
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
