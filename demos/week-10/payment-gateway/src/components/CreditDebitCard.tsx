// ccc
import { Component, ChangeEvent, FormEvent } from 'react';
import { generateSerialNumbers } from '../utils/array';
import ConfirmPayment from './ConfirmPayment';
import PaymentOptions from '../models/PaymentOptions';

type Props = {
    bgColor: string
};

type State = {
    ccNumber: string,
    name: string,
    month: number,
    year: number,
    cvv: number,
    showConfirmPayment: boolean
}

class CreditDebitCard extends Component<Props, State> {
    static initialState = {
        ccNumber: '0',
        name: '',
        month: 0,
        year: 0,
        cvv: 0,
        showConfirmPayment: false
    };

    state = CreditDebitCard.initialState;

    // constructor( props : Props ) {
    //     super( props ); // this.props = props

    //     this.state = {

    //     };
    // }

    // define event hanlders with arrow function syntax ("this" is set up to the class object instead of undefined)
    setValue = ( event : ChangeEvent<HTMLInputElement> ) => {
        console.log( event.target ); // DOM node (input element)
        const { name, value } = event.target;
        console.log( name, value );

        console.log( this );
        this.setState({
            [name]: value
        } as unknown as State );
    }

    setIntValue = ( event : ChangeEvent<HTMLSelectElement | HTMLInputElement> ) => {
        const { name, value } = event.target;

        this.setState({
            [name]: parseInt( value )
        } as unknown as State );
    }

    submitHandler = ( event : FormEvent<HTMLFormElement> ) => {
        event.preventDefault();

        this.setState({
            showConfirmPayment: true
        });
    };

    hideSuccessPayment = () => {
        this.setState({
            showConfirmPayment: false
        });
    }

    reset = () => {
        this.setState({ ...CreditDebitCard.initialState });
    }

    render() {
        // an object with all the props passed by parent
        console.log( this.props );

        const {
            ccNumber,
            name,
            month,
            year,
            cvv,
            showConfirmPayment
        } = this.state;

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="ccNumber">
                                        Credit Card Number:
                                        (12 Digit number)
                                    </label>
                                </td>
                                <td>
                                    <input
                                        id="ccNumber"
                                        min="100000000000"
                                        max="999999999999"
                                        name="ccNumber"
                                        value={ccNumber}
                                        onChange={this.setValue}
                                    /> 
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="name">
                                        Name
                                    </label>
                                </td>
                                <td>
                                    <input
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={this.setValue}
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
                                        id="month"
                                        name="month"
                                        value={month}
                                        onChange={this.setIntValue}
                                    >
                                        <option value="">mm</option>
                                        {
                                            generateSerialNumbers( 1, 12 ).map(
                                                x => (
                                                    <option value={x} key={x}>
                                                        {('' + x).padStart( 2, '0' )}
                                                    </option>
                                                )
                                            )
                                        }
                                    </select>
                                    <select
                                        id="year"
                                        name="year"
                                        value={year}
                                        onChange={this.setIntValue}
                                    >
                                        <option value="">yyyy</option>
                                        {
                                            generateSerialNumbers( 2023, 2033 ).map(
                                                x => (
                                                    <option value={x} key={x}>
                                                        {x}
                                                    </option>
                                                )
                                            )
                                        }
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="cvv">
                                        CVV
                                    </label>
                                </td>
                                <td>
                                    <input
                                        id="cvv"
                                        name="cvv"
                                        value={cvv}
                                        onChange={this.setIntValue}
                                    /> 
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button className="btn btn-pay">Pay</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>

                {
                    showConfirmPayment === true && (
                        <ConfirmPayment
                            onNo={this.hideSuccessPayment}
                            onYes={this.reset}
                            paymentOption={PaymentOptions.CARD}
                        />
                    )
                }
            </div>
        );
    }
}

export default CreditDebitCard;