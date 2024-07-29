import React from 'react';

interface ImageButtonProps {
    children?: React.ReactNode;
    height?: number;
    image?: React.ReactNode | null;
    label?: string;
    width?: number;
    handleAction?: Function;
  }
  
  export default function ImageButton(props:ImageButtonProps):JSX.Element {
    const { children, image, handleAction, height, label, width } = props;
    const imgWidth = width || '100%';
    const imgHeight = height || '100%';
  
    return (
      <div className='rounded-lg bg-neutral-500 m-2 drop-shadow-lg overflow-hidden cursor-pointer'
        style={{width: imgWidth, height: imgHeight}}
        onClick={() => handleAction && handleAction()}
      >
        <div className='bg-gradient-to-t from-black via-transparent overflow-hidden absolute min-h-[100%] min-w-[100%]'>
            {image ? image : children}
        </div>
        <div className='flex align-bottom items-end flex-row-reverse min-h-[100%]'
        >
            {label && <div className="relative text-white text-2xl leading-5 font-medium p-2">{label}</div>}
        </div>
      </div>
    )
  }