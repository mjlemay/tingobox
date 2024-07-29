import React from 'react';
import * as Separator from '@radix-ui/react-separator'

interface BlockProps {
    children?: React.ReactNode;
    icon?: React.ReactNode;
    title?: string;
    menu?: React.ReactNode;
  }
  
  export default function Block(props:BlockProps):JSX.Element {
    const { children, icon, menu, title } = props;
  
    return (
      <div className='m-2'>
        <div className='container mx-auto flex flex-column'
        >
          {icon && (
            <div className='flex grow-0 items-center justify-center min-w-[40px] min-h-[40px] rounded-lg border-1'>
              {icon}
            </div>
          )}
          {title && <div className='flex grow font-semibold items-center min-h-[40px] truncate ...'>{title}</div>}
          {menu && (
            <div className='flex grow-0 items-center justify-center min-w-[40px] min-h-[40px] rounded-lg border-1'>
              {menu}
            </div>
          )}
        </div>
        <Separator.Root className="bg-neutral-925 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mb-[10px]" />
        <div className='container mx-auto'>
        {children}
        </div>
      </div>
    )
  }