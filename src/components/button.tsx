import React from 'react';

interface MenuItemProps {
    children?: React.ReactNode;
    iconBGColor?: string;
    label?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    handleAction?: Function;
}
  
  export default function Button(props:MenuItemProps):JSX.Element {
    const { handleAction, children, iconBGColor, label, prefix, suffix } = props;

    return (
      <button className={`flex flex-row gap-2 hover:bg-indigo-300 items-center justify-center rounded-lg cursor-pointer ${iconBGColor ?  iconBGColor : 'bg-stone-200'}`}
      onClick={() => handleAction && handleAction()}
      >
        {(prefix && 
            <div 
                className='flex grow-0 items-center justify-center min-w-8 max-w-8 w-8 min-h-8 max-h-8 h-8'>
                {prefix}
            </div>
        )}
        <div className='flex items-center justify-center h-10 truncate ...'>
            <span className='inline-block text-xl leading-loose truncate ...'>{label || children}</span>
        </div>
        {(suffix && <div 
            className='flex grow-0 items-center justify-center min-w-8 max-w-8 w-8 min-h-8 max-h-8 h-8'>
                {suffix}
            </div>
        )}
      </button>
    )
  }