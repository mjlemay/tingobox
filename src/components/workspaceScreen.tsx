import React from 'react';

type basicProject = {
    name:string;
    description?: string;
}
interface WorkspaceScreenProps {
    children?: React.ReactNode;
    selectedProject?: basicProject;
    screenActionHandler?: Function;
  }
  
  export default function WorkspaceScreen(props:WorkspaceScreenProps):JSX.Element {
    const { selectedProject } = props;
  
    return (
        <div
        className='w-[800px] h-[600px]'
      >
        <h1>Workspace</h1>
        {JSON.stringify(selectedProject)}
      </div>
    )
  }