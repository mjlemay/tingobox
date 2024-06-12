import React from 'react';

interface NewProjectProps {
    actionHandler: Function;
}
  
  export default function NewProjectView(props:NewProjectProps):JSX.Element {
    const { actionHandler } = props;
  
    return (
      <>
        <h1>New Project</h1>
        <span 
            onClick={() => actionHandler && actionHandler('home')}
            className='hover:bg-[#ef79ac33] cursor-pointer'
        >
                nevermind
        </span>
      </>
    )
  }