import React , { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReturnBar from '../components/ReturnBar';


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
        </div>
    );
}

export default DetailDebitAccount;