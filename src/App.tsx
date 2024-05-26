import React from 'react';
import './app.css';
import CappyTingo from './svg/capytingo';
import Tingobox from './svg/tingobox';

function App() {
  return (
    <div
      className='h-screen bg-indigo-200 flex flex-row min-h-screen justify-center items-center'
    >
      <div
        className='w-[800px] h-[600px]'
      >
        <div className='flex flex-row items-center'>
          <div className='grow'>
            <div className='flex flex-col h-[600px] w-[300px] items-center justify-center'>
              <Tingobox />
              <CappyTingo />
            </div>
          </div>
          <div className='grow'>
            <h3>Recent Projects</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App