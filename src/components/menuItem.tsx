import React from 'react';
import ProjectIcon from '../svg/projectIcon';

interface MenuItemProps {
    children?: React.ReactNode;
    iconBGColor?: String;
    label: String;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
  }
  
  export default function MenuItem(props:MenuItemProps):JSX.Element {
    const { children, iconBGColor, label, prefix, suffix } = props;
  
    return (
      <div className='flex flex-row gap-2 hover:bg-[#ef79ac33] rounded-lg cursor-pointer'>
        <div 
            className={
                `flex grow-0 items-center justify-center min-w-10 max-w-10 w-10 min-h-10 max-h-10 h-10 rounded-lg border-2 border-solid border-gray-800 ${iconBGColor ?  iconBGColor : 'bg-stone-200'}`
            }>
            {(prefix ? prefix : <ProjectIcon />)}</div>
        <div className='flex w-80 h-10 truncate ...'>
            <span className='inline-block text-xl leading-loose truncate ...'>{label}</span>
        </div>
        {(suffix && <div 
            className='flex grow-0 min-w-10 max-w-10 w-10 min-h-10 max-h-10 h-10 rounded-lg'>
                {suffix}
            </div>
        )}
        {children}
      </div>
    )
  }