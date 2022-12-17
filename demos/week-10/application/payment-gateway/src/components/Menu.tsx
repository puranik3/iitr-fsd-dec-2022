import { useState } from "react";
import PaymentOptions from "../utils/PaymentOptions";
import DebitCreditCard from "./DebitCreditCard";
import NetBanking from "./NetBanking";
import UPI from "./UPI";

import './Menu.css';

const paymentOptions = [
    PaymentOptions.CARD,
    PaymentOptions.NET_BANKING,
    PaymentOptions.UPI
];

const Menu = () => {
    const [ option, setOption ] = useState<PaymentOptions | ''>( '' );

    // console.log( option )
    // console.log( setOption )

    // const els = [
    //     <button className="payment-option">{paymentOptions[0]}</button>,
    //     <button className="payment-option">{paymentOptions[1]}</button>,
    //     <button className="payment-option">{paymentOptions[2]}</button>
    // ];

    // const els = paymentOptions.map( po => <button className="payment-option">{po}</button> );

    return (
        <div className="menu">
            <div className="payment-options">
                {
                    paymentOptions.map(
                        po => 
                            <button
                                className={"payment-option " + ( option === po ? "payment-option-selected" : "" )}
                                key={po}
                                onClick={() => setOption( po )}
                            >
                                {po}
                            </button>
                    )
                }
            </div>
            <div className="payment-details">
                {option === PaymentOptions.CARD && <DebitCreditCard />}
                {option === PaymentOptions.NET_BANKING && <NetBanking />}
                {option === PaymentOptions.UPI && <UPI />}
            </div>
        </div>
    );
}
 
export default Menu;