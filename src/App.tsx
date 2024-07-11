import React, { useState } from 'react';
import './app.css';
import SplashScreen from './components/spashScreen.tsx';
import WorkSpaceScreen from './components/workspaceScreen.tsx';


function App() {

  const [ screen, setScreen ] = useState('splash');
  const [ project, setProject ] = useState();

  const handleAction = (action:string, payload:object) => {
    if (action) {
      setScreen(action);
      setProject(payload);
    }
  }

  return (
    <div
      className='h-screen bg-indigo-200 flex flex-row min-h-screen justify-center items-center'
    >
      {screen == 'splash' && <SplashScreen screenActionHandler={handleAction} />}
      {screen == 'workspace' && <WorkSpaceScreen screenActionHandler={handleAction} selectedProject={project} />}
    </div>
  )
}

export default App