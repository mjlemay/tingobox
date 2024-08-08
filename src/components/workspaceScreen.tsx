import React, { useState } from 'react';
import Modal from './modal';
import ProjectForm from './projectForm';
import Block from './block';
import Card from './card';
import RuleIcon from '../svg/ruleIcon';
import ConfirmationForm from './confirmationForm';
import { textCopy } from '../constants/language';
import { defaultProject, basicProjectType } from '../constants/defaults';
import TabHeaders from './tabheaders';
import { BackpackIcon } from '@radix-ui/react-icons'


interface WorkspaceScreenProps {
  children?: React.ReactNode;
  selectedProject: basicProjectType;
  screenActionHandler?: Function;
}
  
export default function WorkspaceScreen(props:WorkspaceScreenProps):JSX.Element {
  const { selectedProject = defaultProject, screenActionHandler = ()=>{}} = props;
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

  const handleActions = (action:string, value:string, payload:basicProjectType) => {
    switch (action) {
      case 'openModal':
          activateModal(value);
        break;
      case 'submit':
        value === 'update' && submitUpdateProject(payload);
        value === 'delete' && submitDeleteProject(payload);
        break;
      default:
        break;
    }
  }

  return (
    <div className="flex flex-row min-h-full min-w-full min-h-full justify-top flex-wrap">
      <div className="flex-full min-w-full justify-top max-h-[40px]">
        <TabHeaders projectTabs={[selectedProject]} actionHandler={handleActions} />
      </div>
      <div data-name="workLayout" className="min-w-full flex-full min-h-full gap-2 justify-top">
          <div data-name="sidebar" className="max-w-[250px] justify-top">
            <Card>
              <Block title="Rulebooks" icon={<RuleIcon />} >
              <span>my first rule</span>
              </Block>
            </Card>
          </div>
          <div data-name="stage"></div>
      </div>


      <div data-id="hidden-containers">
        <Modal 
          open={openModal}
          closeHandler={closeModal}
          title={selectedModal === 'configProject' ? 'Configure » Delete' : 'Edit Project'}
          icon={<BackpackIcon />}
        >
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