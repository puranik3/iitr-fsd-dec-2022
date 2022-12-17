import Dialog from "./Dialog";
import PaymentOptions from "../utils/PaymentOptions";

import './SuccessPayment.css';

interface Props {
    paymentOption: PaymentOptions,
    onSuccess: () => void
}

const SuccessPayment = ( { paymentOption, onSuccess } : Props ) => {
    return (
        <div>
            <Dialog title="Payment successful" show={true}>
                <h2 className="order-value">
                    Your payment has been made successfully.
                </h2>
                <p>
                    Payment mode: {paymentOption}
                </p>
                <button className="btn btn-close" onClick={onSuccess}>Close</button>
            </Dialog>
        </div>
    );
}
 
export default SuccessPayment;