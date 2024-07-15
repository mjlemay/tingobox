import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

interface ModalProps {
    children?: React.ReactNode;
    description?: string | null;
    open?: boolean;
    closeHandler?: Function;
    title?: string;
}
  
export default function Modal(props:ModalProps):JSX.Element {
    const {
        children,
        closeHandler = ()=>{},
        description,
        open = false,
        title } = props;
  
    return (
        <Dialog.Root open={open} >
            <Dialog.Portal>
                <Dialog.Overlay
                    onClick={() => closeHandler()}
                    className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0"
                />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    {title && (<Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                        {title}
                    </Dialog.Title>)}
                    {description && (<Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                        {description}
                    </Dialog.Description>)}
                    { children }
                    <a onClick={() => closeHandler()}>CLOSE</a>
                </Dialog.Content>
            </Dialog.Portal>
      </Dialog.Root>
    )
}