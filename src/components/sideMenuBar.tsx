import React from 'react';
import { DashboardIcon } from '@radix-ui/react-icons'
import IconButton from './iconButton';

interface SideMenuBarProps {
    children?: React.ReactNode;
    screenActionHandler: Function;
  }
  
  export default function SideMenuBar(props:SideMenuBarProps):JSX.Element {
    const { children, screenActionHandler} = props;
  
    return (
      <div className={`h-screen min-h-screen w-[75px] bg-neutral-925`}>
        <div className="min-w-[50px] min-h-[50px]"></div>
        <IconButton handleAction={()=> screenActionHandler('splash')}>
            <DashboardIcon className="min-w-[50px] min-h-[50px]" />
        </IconButton>
        {children}
      </div>
    )
  }