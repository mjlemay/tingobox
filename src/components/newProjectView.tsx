import React, { useState } from 'react';
import Button from './button';
import Input from './input';
import ThumbsUpIcon from '../svg/thumbsUpIcon';

interface NewProjectProps {
    actionHandler: Function;
}
  
  export default function NewProjectView(props:NewProjectProps):JSX.Element {
    const { actionHandler } = props;
    const defaultForm = {
        name: '',
        description: '',
    };
    const [ form, setForm ] = useState(defaultForm);

    const handleFormChange = (Event:React.ChangeEvent<HTMLInputElement>) => {
        const eventTarget = Event?.target;
        const clonedForm = JSON.parse(JSON.stringify(form));
        const formKey = eventTarget?.name;
        const formValue = eventTarget?.value;
        clonedForm[`${formKey}`] = formValue;
        setForm(clonedForm);
    }

    const createNewProject = () => {
        addProject(form);
        actionHandler('view','home');
    }
  
    return (
      <>
        <h1>New Project</h1>
        <div className='mb-4'>
            <Input label='Name' name='name' value={form.name} changeHandler={handleFormChange} />
            <Input label='Description' name='description' value={form.description} changeHandler={handleFormChange} />
        </div>
        <Button suffix={<ThumbsUpIcon />} handleAction={() => createNewProject()}>LET'S GOOO!</Button>
        <div 
            onClick={() => actionHandler && actionHandler('view','home')}
            className='hover:bg-[#ef79ac33] cursor-pointer my-2'
        >
                eh, nevermind
        </div>
      </>
    )
  }