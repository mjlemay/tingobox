import React from 'react';
import './app.css';

function App() {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-700'>
      <div className='grow text-center'>
        <div className='card'>
          <h1 className='text-red-600'>TINGOBOX</h1>
          <h3>A BOX OF WONDERS</h3>
        </div>
      </div>
      <div className='grow justify-center'>
        <div className='card'>
          <h3>Recent Projects</h3>
          <button>Blank Project</button>
          <button>View Project Templates</button>
          <h3>Recent Projects</h3>
        </div>
      </div>
    </div>
  )
}

export default App