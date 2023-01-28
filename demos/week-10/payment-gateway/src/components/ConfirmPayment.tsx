import { useState } from 'react';
import Dialog from './Dialog';
import SuccessPayment from './SuccessPayment';

type Props = {
    onNo: React.MouseEventHandler<HTMLButtonElement>
}

const ConfirmPayment = ( props : Props ) => {
    
    const [ showSuccessPayment, setShowSuccessPayment ] = useState( false );

    return (
        <div>
            {
                showSuccessPayment === false ? (
                    <Dialog show={true}>
                        <div style={{ textAlign: 'center' }}>
                            <h3>Proceed to complete the payment?</h3>
                            <button className="btn btn-cancel" onClick={props.onNo}>No</button>
                            <button className="btn btn-confirm" onClick={() => setShowSuccessPayment( true )}>Yes</button>
                        </div>
                    </Dialog>
                ) : (
                    <SuccessPayment />
                )
            }
        </div>
    );
}
 
export default ConfirmPayment;