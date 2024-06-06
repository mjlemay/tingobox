import React from 'react';

interface BlockProps {
    children?: React.ReactNode;
    title?: string;
  }
  
  export default function Block(props:BlockProps):JSX.Element {
    const { children, title } = props;
  
    return (
      <>
        {title && <h1 className='font-semibold leading-loose'>{title}</h1>}
        <div className='container mx-auto'>
        {children}
        </div>
      </>
    )
  }