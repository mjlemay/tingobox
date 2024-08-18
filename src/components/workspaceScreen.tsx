import React, { useState, useEffect } from 'react';
import Modal from './modal';
import ProjectForm from './projectForm';
import Block from './block';
import Card from './card';
import RuleIcon from '../svg/ruleIcon';
import ConfirmationForm from './confirmationForm';
import { textCopy } from '../constants/language';
import { defaultProject, basicProjectType } from '../constants/defaults';
import TabHeaders from './tabheaders';
import { BackpackIcon } from '@radix-ui/react-icons';
import FlowGraph from './flowGraph';
import { useMeasure } from '@uidotdev/usehooks';



interface WorkspaceScreenProps {
  children?: React.ReactNode;
  selectedProject: basicProjectType;
  screenActionHandler?: Function;
}
  
export default function WorkspaceScreen(props:WorkspaceScreenProps):JSX.Element {
  const { selectedProject = defaultProject, screenActionHandler = ()=>{}} = props;
  const [ selectedModal, setSelectedModal ] = useState('');
  const [ wsSize, setWsSize ] = useState({width: 0, height: 0});
  const [ openModal, setOpenModal ] = useState(false);
  const { confirmDelete } = textCopy;
  const [workspaceRef, { height:wsHeight, width:wsWidth }] = useMeasure();
  console.log('wsHeight', wsHeight);

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

  useEffect(()=> {
    const { height } = wsSize;
    if (height == 0 && wsHeight && wsWidth) {
      setWsSize({...wsSize, height: wsHeight, width: wsWidth});
    }
  }, [wsHeight, wsWidth, setWsSize]);

  return (
    <div className="flex flex-col min-h-screen min-w-full max-h-screen max-w-full justify-top flex-nowrap">
      <div className="flex-full min-w-full justify-top max-h-[40px]">
        <TabHeaders projectTabs={[selectedProject]} actionHandler={handleActions} />
      </div>
      <div data-name="workLayout" className='min-w-full max-h-screen justify-stretch items-stretch flex flex-row flex-grow'>
          <div data-name="sidebar" className="min-w-[250px]">
            <Card>
              <Block title="Rulebooks" icon={<RuleIcon />} >
              <span>Core Rules</span>
              </Block>
            </Card>
          </div>
          <div data-name="stage" ref={workspaceRef as any} className="grow min-h-fit max-h-full rounded-lg bg-neutral-950 mt-2 mb-2 mr-2">
            <Block title="Core Rules" size="lg" icon={<RuleIcon />} >
              <div
                className="block  m-0 p-0 overflow-auto"
                style={{height: wsSize.height - 100 }}
              >
                <FlowGraph width={`${wsSize.width - 60}px`} height={`${wsSize.height - 100}px`} />
              </div>
              </Block>
          </div>
      </div>


      <div data-id="hidden-containers" className='absolute'>
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