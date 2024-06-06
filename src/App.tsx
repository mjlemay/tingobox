import React from 'react';
import './app.css';
import Block from './components/block.tsx';
import Button from './components/button.tsx';
import CappyTingo from './svg/capytingo.tsx';
import MenuItem from './components/menuItem.tsx';
import Tingobox from './svg/tingobox.tsx';

import ProjectIcon from './svg/projectIcon';


function App() {
  return (
    <div
      className='h-screen bg-indigo-200 flex flex-row min-h-screen justify-center items-center'
    >
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
              <Block title="Recent Projects">
                <div className="flex flex-col gap-2">
                  <MenuItem label="Awesome Project" />
                  <MenuItem label="High Score Table" />
                  <MenuItem label="Game Night Quiz" />
                  <MenuItem label="Tabletop Loot Chart Concerning Potions of Healing" />
                </div>
              </Block>
              <Block title="Quick Actions">
                <Button suffix={<ProjectIcon />}>New Project</Button>
              </Block>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App