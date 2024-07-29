import React, { useState } from 'react';
import Modal from './modal';
import ProjectForm from './projectForm';
import ConfirmationForm from './confirmationForm';
import { textCopy } from '../constants/language';
import { defaultProject, basicProjectType } from '../constants/defaults';
// import {
//   GearIcon,
//   Pencil1Icon,
// } from '@radix-ui/react-icons';


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

  // const activateModal = (modal:string) => {
  //   setSelectedModal(modal);
  //   setOpenModal(true);
  // }
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

  // const ProjectMenuItems = [
  //   {
  //     label: 'Edit Project',
  //     icon: <Pencil1Icon />,
  //     clickHandler: () => activateModal('editProject'),
  //   },
  //   {
  //     label: 'Configure Settings',
  //     icon: <GearIcon />,
  //     clickHandler: () => activateModal('configProject'),
  //   }
  // ]


  return (
    <>
      <div className="flex flex-col min-w-full  min-h-full justify-top">
        <div data-id="header" 
          className="h-[40px] flex-none border-b border-neutral-800 bg-neutral-950"
        >
          <div className="text-xl h-[40px] w-fit max-w-[200px] py-3 px-4 inline-flex items-center gap-x-2 bg-neutral-900  text-center border data-[selected=true]:border-b-0 border-neutral-800 text-white rounded-tr-xl data-[selected=true]:opacity-100 opacity-50 cursor-pointer leading-loose truncate ..." data-id={projectId} data-selected>
          <span className='inline-block text-m font-medium leading-loose truncate ...'> {name}</span>
          </div>
        </div>
        <div className="min-w-full grow">
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
    </>
  )
}