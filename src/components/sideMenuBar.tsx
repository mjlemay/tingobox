import React from 'react';
import { DashboardIcon } from '@radix-ui/react-icons'
import IconButton from './iconButton';

interface SideMenuBarProps {
    children?: React.ReactNode;
  }
  
  export default function SideMenuBar(props:SideMenuBarProps):JSX.Element {
    const { children } = props;
  
    return (
      <div className={`h-screen min-h-screen w-[75px] bg-neutral-925`}>
        <div className="min-w-[50px] min-h-[50px]"></div>
        <IconButton>
            <DashboardIcon className="min-w-[50px] min-h-[50px]" />
        </IconButton>
        {children}
      </div>
    )
  }