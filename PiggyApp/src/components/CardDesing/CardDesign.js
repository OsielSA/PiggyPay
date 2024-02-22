
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './CardDesing.css'

const CardDesign = ({issuingBank, cardholderName, cardNumber, onClick}) => {
    const [issuingBankIn, setIssuingBankIn] = useState(issuingBank);
    const [cardholderNameIn, setCardholderNameIn] = useState(cardholderName);
    const [cardNumberFormatted, setCardNumber] = useState('');
    useEffect(() => {
        if (cardNumber) {
            let formattedInput = cardNumber.replace(/\D/g, '').slice(0, 16);
            formattedInput = formattedInput.replace(/(\d{4})/g, '$1 ').trim();
            setCardNumber(formattedInput);
        }
    }, [cardNumber]);

    return (
        <>
            <div className='containerCard'>
                <div className="cardBody">
                    <div className='row'>
                        <div className='col-10' style={{textAlign: 'left'}}>
                            <div className='cardName'>
                            <span>{issuingBankIn} - {cardholderNameIn}</span>
                            </div>
                        </div>
                        <div className='col-2' style={{textAlign: 'right'}}>
                            <div className="logo-crypto">
                                 <Link to={{pathname:"/debit_accounts/form" }} onClick={onClick}>
                                    <i className='fa-solid fa-edit' style={{color: 'black', textDecoration: 'none'}}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="container-numeros">
                        <div className="numeros">
                            <span>{cardNumberFormatted}</span>
                        </div>
                    </div>
                    <div className='row' style={{marginBottom:'10px'}}>
                        <div className='col-3'>
                            <div className="chip"></div>           
                        </div>
                        <div className='col-9'>
                        <div className='container-detalle'>
                            <Link to={{pathname:"/debit_accounts/detail" }} onClick={onClick}>ver detalle</Link>
                        </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>            
        </>
    );
}

export default CardDesign;