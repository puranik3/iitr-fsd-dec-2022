import { useState } from 'react';
import PaymentOptions from '../models/PaymentOptions';
import Dialog from './Dialog';
import SuccessPayment from './SuccessPayment';

type Props = {
    onNo: () => void,
    onYes: () => void,
    paymentOption: PaymentOptions
}

const ConfirmPayment = ( { onYes, onNo, paymentOption }: Props ) => {
    
    const [ showSuccessPayment, setShowSuccessPayment ] = useState( false );

    return (
        <div>
            {
                showSuccessPayment === false ? (
                    <Dialog show={true}>
                        <div style={{ textAlign: 'center' }}>
                            <h3>Proceed to complete the payment?</h3>
                            <button className="btn btn-cancel" onClick={onNo}>No</button>
                            <button className="btn btn-confirm" onClick={() => setShowSuccessPayment( true )}>Yes</button>
                        </div>
                    </Dialog>
                ) : (
                    <SuccessPayment
                        onClose={onYes}
                        paymentOption={paymentOption}
                    />
                )
            }
        </div>
    );
}
 
export default ConfirmPayment;