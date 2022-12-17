import { useState } from 'react';
import PaymentOptions from '../utils/PaymentOptions';
import Dialog from './Dialog';
import SuccessPayment from './SuccessPayment';

interface Props {
    paymentOption: PaymentOptions,
    onCancel: () => void,
    onSuccess: () => void
}

const ConfirmPayment = ( { paymentOption, onCancel, onSuccess } : Props ) => {
    const [ show, setShow ] = useState( false );

    return (
        <div>
            {
                !show ? (
                    <Dialog 
                        title="Confirm Payment"
                        show={true}
                    >
                        <h3>Proceed to complete the payment?</h3>
                        <button className="btn btn-cancel" onClick={onCancel}>No</button>
                        <button className="btn btn-confirm" onClick={() => setShow( true )}>Yes</button>
                    </Dialog>
                ) : (
                    <SuccessPayment paymentOption={paymentOption} onSuccess={onSuccess} />
                )
            }
        </div>
    );
}
 
export default ConfirmPayment;