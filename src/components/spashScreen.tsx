import React, { useState } from 'react';
import CappyTingo from '../svg/capytingo.tsx';
import Tingobox from '../svg/tingobox.tsx';
import HomeView from './homeView.tsx';
import NewProjectView from './newProjectView.tsx';

interface SplashScreenProps {
    children?: React.ReactNode;
  }
  
  export default function SplashScreen(props:SplashScreenProps):JSX.Element {
    const { children } = props;
    const [ view, setView ] = useState('home');

    const handleAction = (action:string) => {
      if (action) {
        setView(action);
      }
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
              {view == 'home' && <HomeView actionHandler={handleAction} />}
              {view == 'newProject' && <NewProjectView actionHandler={handleAction} />}
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  }