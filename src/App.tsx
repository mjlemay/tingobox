import React from 'react';
import './app.css';
import SplashScreen from './components/spashScreen.tsx';



function App() {
  return (
    <div
      className='h-screen bg-indigo-200 flex flex-row min-h-screen justify-center items-center'
    >
      <SplashScreen />
    </div>
  )
}

export default App