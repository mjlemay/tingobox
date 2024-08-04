import React from 'react';

interface InputProps {
    changeHandler?: Function;
    label?: string;
    name: string;
    hidden?: boolean;
    value?: string | number | readonly string[];
    errMsg?: string;
}
  
  export default function Input(props:InputProps):JSX.Element {
    const { changeHandler = ()=>{}, errMsg, hidden = false, label, name, value = '' } = props;
  
    return (
      <div className='my-2'>
        <label className='block text-neutral-400 font-semibold text-lg mb-1 mt-1'>{label}</label>
        <input 
          className='peer outline-none bg-gradient-to-b from-neutral-950 to-neutral-900 border-none rounded-lg block w-full p-2.5 text-xl outline outline-0 focus:outline-0 transition-all px-3 py-2.5 ring-1 ring-neutral-700 focus:ring-2 focus:ring-neutral-600'
          value={value}
          name={name}
          type={hidden ? 'hidden' : 'text' }
          onChange={(Event) => changeHandler(Event)}
        />
        <div className={errMsg ? 'block text-red-400 m1' : 'hidden'}>{errMsg}</div>
      </div>
    )
  }