import React, { useState} from 'react';
import './app.css';
import SplashScreen from './components/splashScreen.tsx';
import WorkSpaceScreen from './components/workspaceScreen.tsx';
import { defaultProject, basicProjectType } from './constants/defaults.ts';
import SideMenuBar from './components/sideMenuBar.tsx';

function App() {

  const [ screen, setScreen ] = useState('splash');
  const [ project, setProject ] = useState(defaultProject as basicProjectType);

  const handleAction = (action:string, payload:basicProjectType) => {
    action && setScreen(action);
    payload && setProject(payload);
  }

  return (
      <div
        className={`h-screen bg-neutral-900 text-white flex flex-column min-h-screen w-screen min-w-screen justify-center items-center`}
        data-theme={"darkTheme"}
      >
        <SideMenuBar />
        <div className={`h-screen flex flex-row min-h-screen w-screen justify-center items-center`}>
          {screen == 'splash' && <SplashScreen screenActionHandler={handleAction} />}
          {screen == 'workspace' && <WorkSpaceScreen screenActionHandler={handleAction} selectedProject={project} />}
        </div>
      </div>
  )
}

export default App