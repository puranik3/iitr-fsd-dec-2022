import { ChangeEvent, FormEvent, Component } from 'react';
import ConfirmPayment from './ConfirmPayment';
import { range } from '../utils/helper';
import PaymentOptions from '../utils/PaymentOptions';

interface Props {
}
 
interface State {
    confirmPayment: boolean,
    cardNumber: string,
    name: string,
    expiryDateMonth: number | '',
    expiryDateYear: number | '',
    cvv: number | ''
}
 
class DebitCreditCard extends Component<Props, State> {
    state = {
        confirmPayment: false,
        cardNumber: '',
        name: '',
        expiryDateMonth: '' as number | '',
        expiryDateYear: '' as number | '',
        cvv: '' as number | ''
    };

    updateValue = ( event : ChangeEvent<HTMLInputElement> ) => {
        console.log( 'input is being provided' );
        const value = event.target.value;
        const field = event.target.id;

        this.setState({
            [field]: value
        } as unknown as State);
    }
    
    updateValueAsInt = ( event : ChangeEvent<HTMLSelectElement | HTMLInputElement> ) => {
        const value = event.target.value;
        const field = event.target.id;

        const intValue = parseInt( value );

        if( isNaN( intValue ) ) {
            return;
        }

        this.setState({
            [field]: intValue
        } as unknown as State);
    }

    pay = ( event : FormEvent<HTMLFormElement> ) => {
        event.preventDefault();

        this.setState({
            confirmPayment: true
        });
    }

    onCancel = () => {
        this.setState({
            confirmPayment: false
        });
    }
    
    onSuccess = () => {
        this.setState({
            confirmPayment: false,
            cardNumber: '',
            name: '',
            expiryDateMonth: '' as number | '',
            expiryDateYear: '' as number | '',
            cvv: '' as number | ''
        });
    }

    render() { 
        return (
            <>
                <form onSubmit={this.pay}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label
                                        htmlFor="cardNumber"
                                    >
                                        Card number (12 digits)
                                    </label>
                                </td>
                                <td>
                                    <input
                                        id="cardNumber"
                                        min="100000000000"
                                        max="999999999999"
                                        placeholder="xxxx-xxxx-xxxx"
                                        value={this.state.cardNumber}
                                        onChange={this.updateValue}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label
                                        htmlFor="name"
                                    >
                                        Name
                                    </label>
                                </td>
                                <td>
                                    <input
                                        id="name"
                                        placeholder="John Doe"
                                        value={this.state.name}
                                        onChange={this.updateValue}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        Expiry date
                                    </label>
                                </td>
                                <td>
                                    <select
                                        id="expiryDateMonth"
                                        value={this.state.expiryDateMonth}
                                        onChange={this.updateValueAsInt}
                                        required
                                    >
                                        <option value="">mm</option>
                                        {
                                            range( 1, 12 ).map(
                                                num => <option value={num} key={num}>{( '' + num ).padStart( 2, '0' )}</option>
                                            )
                                        }
                                    </select>
                                    <select
                                        id="expiryDateYear"
                                        value={this.state.expiryDateYear}
                                        onChange={this.updateValueAsInt}
                                        required
                                    >
                                        <option value="">yyyy</option>
                                        {
                                            range( ( new Date() ).getFullYear(), ( new Date() ).getFullYear() + 15 ).map(
                                                num => <option value={num} key={num}>{num}</option>
                                            )
                                        }
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label
                                        htmlFor="cvv"
                                    >
                                        CVV
                                    </label>
                                </td>
                                <td>
                                    <input
                                        id="cvv"
                                        type="password"
                                        placeholder='xxx'
                                        value={this.state.cvv}
                                        onChange={this.updateValueAsInt}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="submit" value="Pay" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                {this.state.confirmPayment && <ConfirmPayment paymentOption={PaymentOptions.CARD} onCancel={this.onCancel} onSuccess={this.onSuccess}></ConfirmPayment>}
            </>
        );
    }
}
 
export default DebitCreditCard;