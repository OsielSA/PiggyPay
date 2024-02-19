import React , { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';



const DetailDebitAccount = () => {

    const account = useSelector((state) => state.account)

    useEffect ( () => {
        console.log("DetailDebitAccount");
        // console.log(account);
    }, []);

    return (
        <div>
            <h1>DetailDebitAccount Page</h1>
            <h2>{account.issuingBank}</h2>
        </div>
    );
}

export default DetailDebitAccount;