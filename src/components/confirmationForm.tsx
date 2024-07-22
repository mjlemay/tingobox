import React from 'react';
import Button from './button';
import { basicProjectType } from '../constants/defaults';

interface BlankProps {
    children?: React.ReactNode;
    confirmHandler: Function;
    confirmMessage?: String;
    denyHandler?: Function;
    defaultPayload?: basicProjectType;
  }
  
  export default function Blank(props:BlankProps):JSX.Element {
    const { children, confirmHandler = ()=>{}, confirmMessage, defaultPayload, denyHandler = ()=>{} } = props;

    const submitConfirm = () => {
        confirmHandler(defaultPayload);
    }
  
    return (
      <>
        {children}
        {confirmMessage}
        <Button handleAction={() => denyHandler()}>Deny</Button>
        <Button handleAction={() => submitConfirm()}>Confirm</Button>
      </>
    )
  }