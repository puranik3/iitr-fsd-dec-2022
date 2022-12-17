import { ReactNode } from 'react';
import './Dialog.css';

interface Props {
    title: string,
    show: boolean,
    children: ReactNode
};

const Dialog = ( { title, show, children } : Props ) => {
    // console.log( props );

    return (
        show ? (
            <div className="dialog-overlay">
                <div className="dialog">
                    <h2>{title}</h2>
                    {children}
                </div>
            </div>
        ) : null
    );
}
 
export default Dialog;