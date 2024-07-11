import React from 'react';

type basicProject = {
    name: string;
    description?: string;
}
interface WorkspaceScreenProps {
    children?: React.ReactNode;
    selectedProject?: basicProject;
    screenActionHandler?: Function;
  }
  
  export default function WorkspaceScreen(props:WorkspaceScreenProps):JSX.Element {
    const defaultProject = { name: 'Undefined', description: '' };
    const { selectedProject = defaultProject } = props;
    const { name, description = '' } = selectedProject;
  
    return (
        <div
        className="h-screen w-screen"
      >
        <div data-id="header" 
          className="h-[40px] w-screen bg-indigo-400 border-1 border-solid border-indigo-500 flex justify-between items-center"
        >
          <div data-id="left-head-bar" className="flex-initial"></div>
          <div data-id="main-head-bar">
            <h1 className="text-xl">{name}</h1>
          </div>
          <div data-id="right-head-bar" className="flex-initial"></div>
        </div>
        <div>
          <div data-id="sideBar"></div>
          <div data-id="deskTop"></div>
        </div>
      </div>
    )
  }