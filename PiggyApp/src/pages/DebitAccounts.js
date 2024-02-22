import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { API_URLS } from '../apiConfig';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addAccount, removeAccount } from '../redux/DebitAccountSlice';
import PiggyButton from '../components/PiggyButton/PiggyButton';
import CardDesign from '../components/CardDesing/CardDesign';
import { dataOffline } from '../OfflineData.js'

function formatText(text){
    let formattedInput = text.replace(/\D/g, '').slice(0, 16);
    formattedInput = formattedInput.replace(/(\d{4})/g, '$1 ').trim();
    return formattedInput;
}
const DebitAccounts = () => {
    const dispatch = useDispatch();

    const url = API_URLS.DEBIT_ACOUNTS;

    const [accounts, setAccount] = useState([]);

    const getAccounts = async () => {
        try {
            // const response = await axios.get(url);
            // setAccount(response.data);
            
            setAccount(dataOffline);
        } catch (error) {
            console.error('Error al obtener datos de la API', error);
        }
    }

    const addAccountState = (account) => {
        dispatch(addAccount(account))
    }
    const clearState = () => {
        console.log("Limpiar estado")
        dispatch(removeAccount());
    }

    useEffect ( () => {
        getAccounts();
    }, []);

    return (
        <div className='App'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 justify-content-center' style={{marginTop: '20px'}}>
                        <Link to={{pathname:"/debit_accounts/form"}}>
                            <PiggyButton
                                variant='btn-primary-color'
                                initialValue='Agregar nueva tarjeta'
                                icon="fa-solid fa-credit-card"
                                width='80%'
                                onClick={clearState}/>
                        </Link>
                    </div>
                </div>
                <div className="contenedor" style={{height: '700px', overflowY: 'auto', overflowX: 'hidden',  marginTop: '20px', paddingLeft:'10px',paddingRight:'8px'}}>
                {accounts.map( (account, i) => (
                    <div style={{padding:'10px 10px 0 0'}} key={account.idAccount}>
                        <CardDesign issuingBank={account.issuingBank} cardholderName={account.cardholderName} cardNumber={account.cardNumber} onClick={() => addAccountState(account)}/>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default DebitAccounts