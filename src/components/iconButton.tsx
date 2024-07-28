import React from 'react';


interface IconButtonProps {
    children?: React.ReactNode;
  }
  
  export default function IconButton(props:IconButtonProps):JSX.Element {
    const { children } = props;
  
    return (
      <div className='cursor-pointer min-w-[40px] min-h-[40px] hover:bg-neutral-800 rounded-lg text-white m-1 p-2 flex justify-center items-center '>
        {children}
      </div>
    )
  }