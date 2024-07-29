import React, { useState } from 'react';
import Button from './button';
import Input from './input';
import ThumbsUpIcon from '../svg/thumbsUpIcon';
import { basicProjectType, createProjectType, defaultProject } from '../constants/defaults';

interface NewProjectProps {
    exitHandler: Function;
    submitHandler: Function;
    defaultPayload?: basicProjectType | createProjectType;
}
  
  export default function ProjectForm(props:NewProjectProps):JSX.Element {
    const { defaultPayload, exitHandler, submitHandler } = props;
    const defaultFormState = defaultPayload || defaultProject;
    const [ form, setForm ] = useState(defaultFormState);

    const handleFormChange = (Event:React.ChangeEvent<HTMLInputElement>) => {
        const eventTarget = Event?.target;
        const clonedForm = JSON.parse(JSON.stringify(form));
        const formKey = eventTarget?.name;
        const formValue = eventTarget?.value;
        clonedForm[`${formKey}`] = formValue;
        setForm(clonedForm);
    }

    const createNewProject = () => {
        submitHandler(form);
        exitHandler('view','home');
    }
  
    return (
      <div className='p-2'>
        <div className='mb-4'>
            <Input name='projectId' value={form.projectId || -1} hidden changeHandler={()=>{}} />
            <Input name='is_template' value={form.is_template || 0} hidden changeHandler={()=>{}} /> 
            <Input label='Project Name' name='name' value={form.name || ''} changeHandler={handleFormChange} />
            <Input label='Description' name='description' value={form.description || ''} changeHandler={handleFormChange} />
        </div>
        <Button suffix={<ThumbsUpIcon />} handleAction={() => createNewProject()}>LET'S GOOO!</Button>
        <div 
            onClick={() => exitHandler && exitHandler('view','home')}
            className='hover:bg-[#ef79ac33] cursor-pointer my-2'
        >
                eh, nevermind
        </div>
      </div>
    )
  }