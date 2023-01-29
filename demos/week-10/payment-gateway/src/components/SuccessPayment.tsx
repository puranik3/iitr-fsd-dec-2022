import Dialog from './Dialog';
import PaymentOption from '../models/PaymentOptions';

import './SuccessPayment.css';

type Props = {
    onClose: () => void,
    paymentOption: PaymentOption
};

const SuccessPayment = ( { onClose, paymentOption } : Props ) => {
    return (
        <Dialog show={true}>
            <div style={{ textAlign: 'center' }}>
                <h2 className="order-value">Your Payment of Rs 5000 is Successful!!!</h2>
                <p className="order-delivery">Your order will be delivered by {(new Date()).toDateString()}</p>
                <table className="order-details">
                    <tbody>
                        <tr>
                            <td>Transaction Id: </td>
                            <td>123456789012</td>
                        </tr>
                        <tr>
                            <td>Transaction Date:</td>
                            <td>12-03-2021</td>
                        </tr>
                        <tr>
                            <td>Payment Mode:</td>
                            <td>{paymentOption}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button className="btn btn-close" onClick={onClose}>Close</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Dialog>
    );
}
 
export default SuccessPayment;