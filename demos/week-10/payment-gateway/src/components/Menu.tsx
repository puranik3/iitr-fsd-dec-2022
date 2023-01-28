import { useState } from 'react';
import PaymentOptions from '../models/PaymentOptions';
import CreditDebitCard from './CreditDebitCard';
import NetBanking from './NetBanking';
import UPI from './UPI';

import './Menu.css';

const paymentOptions = [
    PaymentOptions.CARD,
    PaymentOptions.NETBANKING,
    PaymentOptions.UPI
];

const Menu = () => {
    const [ selectedOption, setSelectedOption ] = useState( '' );
    // console.log( selectedOption ); // ''
    // console.log( setSelectedOption ); // f -> setter function for x

    return (
        <section className="menu">
            <div className="payment-options">
                {
                    /*
                    This is a "React element" -> a React element is an object internally
                    <button className="payment-option">Credit/Debit Card</button>
                    */
                }
                {
                    /*
                    [
                        <button className="payment-option">Credit/Debit Card</button>,
                        <button className="payment-option">NetBanking</button>,
                        <button className="payment-option">UPI</button>,
                    ]
                    */
                }
                {
                    /* this map() generates the exact same UI as above */
                    paymentOptions.map(
                        paymentOption => (
                            <button
                                className={`payment-option ${paymentOption === selectedOption ? 'payment-option-selected' : ''}`}
                                key={paymentOption}
                                onClick={() => setSelectedOption( paymentOption )}
                            >
                                {paymentOption}
                            </button>
                        )
                    )
                }
            </div>

            <div className="payment-details">
                {
                    selectedOption === PaymentOptions.CARD && <CreditDebitCard bgColor="red" />
                }
                {
                    selectedOption === PaymentOptions.NETBANKING && <NetBanking />
                }
                {
                    selectedOption === PaymentOptions.UPI && <UPI />
                }
            </div>
        </section>
    );
}
 
export default Menu;