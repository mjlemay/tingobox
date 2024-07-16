import React, { useState } from 'react';
import './app.css';
import SplashScreen from './components/splashScreen.tsx';
import WorkSpaceScreen from './components/workspaceScreen.tsx';
import { defaultProject, basicProjectType } from './constants/defaults.ts';


function App() {

  const [ screen, setScreen ] = useState('splash');
  const [ project, setProject ] = useState(defaultProject as basicProjectType);

  const handleAction = (action:string, payload:basicProjectType) => {
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