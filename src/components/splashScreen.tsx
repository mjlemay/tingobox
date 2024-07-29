import React, { useState } from 'react';
import HomeView from './homeView.tsx';
import ProjectForm from './projectForm.tsx';
import { createProjectType } from '../constants/defaults.ts';
import Card from './card.tsx';
import ImageButton from './imageButton.tsx';

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
  
    //TODO: WRITE CARD ELEMENT WRAPPER
    return (
      <Card>
          <div
          className='w-[800px] h-[600px]'
        >
          <div className='flex flex-row items-center'>
            <div className='grow w-full'>
              <div className='flex flex-col h-[600px]'>
                <ImageButton width={350} height={200} label="Create A New Project" handleAction={() => setView('newProject')} />
                <ImageButton width={350} height={200} label="Start From A Template" handleAction={() => console.log('newTemplate')} />
                <ImageButton width={350} height={200} label="Select an Event" handleAction={() => console.log('viewEvents')} />
              </div>
            </div>
            <div className='grow w-full'>
              <div className="flex flex-col h-[600px] justify-top">
                {view == 'home' && <HomeView actionHandler={handleView} />}
                {view == 'newProject' && <ProjectForm submitHandler={handleSubmit} exitHandler={handleView} />}
                {children}
              </div>
            </div>
          </div>
        </div>
      </Card>
    )
  }
