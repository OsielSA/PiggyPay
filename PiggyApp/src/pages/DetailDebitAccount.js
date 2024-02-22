import React , { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReturnBar from '../components/ReturnBar';
import CardDesign from '../components/CardDesing/CardDesign';

const DetailDebitAccount = () => {

    const account = useSelector((state) => state.account)

    useEffect ( () => {
        console.log("DetailDebitAccount");
        // console.log(account);
    }, []);

    return (
        <div>
            <ReturnBar title='Regresar' pathname="/debit_accounts" />
            <h1>DetailDebitAccount Page</h1>
            <h2>{account.issuingBank}</h2>
            <br></br>
            <div style={{marginLeft:'10px', marginRight:'30px'}}>
                <CardDesign issuingBank='Banamex' cardholderName='Clasica' cardNumber='5214785236548952' />
            </div>
        </div>
    );
}

export default DetailDebitAccount;