import React from 'react';

import Block from '../components/block.tsx';
import Button from '../components/button.tsx';
import MenuItem from '../components/menuItem.tsx';
import ProjectIcon from '../svg/projectIcon';

interface HomeViewProps {
    actionHandler: Function;
}
  
  export default function HomeView(props:HomeViewProps):JSX.Element {
    const { actionHandler } = props;
  
    return (
      <>
          <Block title="Recent Projects">
                <div className="flex flex-col gap-2">
                  <MenuItem label="Awesome Project" />
                  <MenuItem label="High Score Table" />
                  <MenuItem label="Game Night Quiz" />
                  <MenuItem label="Tabletop Loot Chart Concerning Potions of Healing" />
                </div>
              </Block>
              <Block title="Quick Actions">
                <Button suffix={<ProjectIcon />} handleAction={() => actionHandler('newProject')}>New Project</Button>
              </Block>
      </>
    )
  }