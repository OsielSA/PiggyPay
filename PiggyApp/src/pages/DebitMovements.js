import React , { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const DebitMovements = () => {
    const account = useSelector((state) => state.account)

    useEffect ( () => {
        console.log("idAccount: " + account.idAccount);
    }, []);

    return (
        <p>Movimientos</p>
    );
}

export default DebitMovements;