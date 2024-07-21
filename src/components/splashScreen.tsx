import React, { useState } from 'react';
import CappyTingo from '../svg/capytingo.tsx';
import Tingobox from '../svg/tingobox.tsx';
import HomeView from './homeView.tsx';
import ProjectForm from './projectForm.tsx';
import { createProjectType } from '../constants/defaults.ts';

interface SplashScreenProps {
  children?: React.ReactNode;
  screenActionHandler: Function;
}
  
  export default function SplashScreen(props:SplashScreenProps):JSX.Element {
    const { children, screenActionHandler } = props;
    const [ view, setView ] = useState('home');

    const handleView = (action:string, value:string, payload:object) => {
      if (action == 'view') {
        setView(value);
      }
      if (action == 'screen') {
        screenActionHandler(value, payload);
      }
    }

    const handleSubmit = async (payload:createProjectType) => {
      await projectData.addProject(payload);
    }
  
    return (
        <div
        className='w-[800px] h-[600px] merdee'
      >
        <div className='flex flex-row items-center'>
          <div className='grow'>
            <div className='flex flex-col h-[600px] w-[300px] items-center justify-center'>
              <Tingobox />
              <CappyTingo />
            </div>
          </div>
          <div className='grow'>
            <div className="flex flex-col h-[600px] w-[300px] justify-center">
              {view == 'home' && <HomeView actionHandler={handleView} />}
              {view == 'newProject' && <ProjectForm submitHandler={handleSubmit} exitHandler={handleView} />}
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  }
