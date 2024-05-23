import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <h1>Electron + Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          This includes react!
        </p>
      </div>
    </div>
  )
}

export default App