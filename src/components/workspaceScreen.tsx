import React, { useState } from 'react';
import DropdownMenuButton from './dropdownMenuButton';
import Modal from './modal';
import ProjectForm from './projectForm';
import ConfirmationForm from './confirmationForm';
import { textCopy } from '../constants/language';
import { defaultProject, basicProjectType } from '../constants/defaults';
import {
  GearIcon,
  Pencil1Icon,
} from '@radix-ui/react-icons';


interface WorkspaceScreenProps {
  children?: React.ReactNode;
  selectedProject: basicProjectType;
  screenActionHandler?: Function;
}
  
export default function WorkspaceScreen(props:WorkspaceScreenProps):JSX.Element {
  const { selectedProject = defaultProject, screenActionHandler = ()=>{}} = props;
  const { name, projectId } = selectedProject;
  const [ selectedModal, setSelectedModal ] = useState('');
  const [ openModal, setOpenModal ] = useState(false);
  const { confirmDelete } = textCopy;

  const activateModal = (modal:string) => {
    setSelectedModal(modal);
    setOpenModal(true);
  }
  const closeModal = () => {
    setOpenModal(false);
    setSelectedModal('');
  }

  const submitUpdateProject = async (payload:basicProjectType) => {
    await projectData.updateProject(payload).then((data:any) => {
      screenActionHandler('workspace', data[0]);
    });
  }

  const submitDeleteProject = async (payload:basicProjectType) => {
    await projectData.deleteProject(payload).then(() => {
      screenActionHandler('splash');
    });
  }

  const ProjectMenuItems = [
    {
      label: 'Edit Project',
      icon: <Pencil1Icon />,
      clickHandler: () => activateModal('editProject'),
    },
    {
      label: 'Configure Settings',
      icon: <GearIcon />,
      clickHandler: () => activateModal('configProject'),
    }
  ]


  return (
      <div
      className="h-screen w-screen"
    >

      <div>
        <div data-id="sideBar"></div>
        <div data-id="desktop">
          <div data-id="header" 
          className="h-[40px] w-screen bg-indigo-400 border-1 border-solid border-indigo-500 flex justify-between items-center"
        >
          <div data-id="left-head-bar" className="flex-initial"></div>
          <div data-id="main-head-bar">
            <h1 className="text-xl" data-id={projectId}>{name}</h1>
          </div>
          <div data-id="right-head-bar" className="flex-initial">
            <DropdownMenuButton menuItems={ProjectMenuItems} />
          </div>
        </div>
        </div>
      </div>
      <div data-id="hidden-containers">
        <Modal open={openModal} closeHandler={closeModal} description={selectedModal === 'configProject' ? 'Delete?' : ''} >
          {selectedModal === 'editProject' && (
            <ProjectForm 
              submitHandler={(payload:basicProjectType)=> submitUpdateProject(payload)} 
              exitHandler={()=> closeModal()}
              defaultPayload={selectedProject}
              />
          )}
          {selectedModal === 'configProject' && (
            <ConfirmationForm 
              confirmHandler={(payload:basicProjectType)=> submitDeleteProject(payload)} 
              denyHandler={()=> closeModal()} 
              confirmMessage={confirmDelete}
              defaultPayload={selectedProject}
              />
          )}
        </Modal>
      </div>
    </div>
  )
}