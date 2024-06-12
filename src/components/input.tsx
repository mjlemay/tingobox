import React from 'react';

interface InputProps {
    changeHandler: Function;
    label?: string;
    name: string;
    value?: string | number | readonly string[];
}
  
  export default function Input(props:InputProps):JSX.Element {
    const { changeHandler, label, name, value = '' } = props;
  
    return (
      <div className='my-2'>
        <label className='block text-lg'>{label}</label>
        <input 
          className='peer outline-none bg-gray-50 border-none text-gray-900 rounded-lg block w-full p-2.5 text-xl outline outline-0 focus:outline-0 transition-all px-3 py-2.5 focus:ring-2 focus:ring-blue-500'
          value={value}
          name={name}
          onChange={(Event) => changeHandler(Event)}
        />
      </div>
    )
  }