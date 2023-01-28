import { ReactNode } from 'react';
import './Dialog.css';

type Props = {
    show: boolean,
    children: ReactNode
}

const Dialog = ( props : Props ) => {
    console.log( props );

    return (
        <>
            {props.show && (
                <div className="dialog-overlay">
                    <div className="dialog">{props.children}</div>
                </div>
            )}
        </>
    );
}
 
export default Dialog;