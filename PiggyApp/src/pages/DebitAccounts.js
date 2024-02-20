import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { API_URLS } from '../apiConfig';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { addAccount, removeAccount } from '../redux/DebitAccountSlice';


const DebitAccounts = () => {
    const dispatch = useDispatch();

    const url = API_URLS.DEBIT_ACOUNTS;

    const [accounts, setAccount] = useState([]);

    const getAccounts = async () => {
        try {
            const response = await axios.get(url);
            setAccount(response.data);
            
            // var data = [
            //     {
            //         "idAccount": 1,
            //         "idUser": 1,
            //         "cardholderName": "Azul",
            //         "issuingBank": "BBVA",
            //         "cardNumber": "1234123412341234",
            //         "allowsSections": true,
            //         "currentBalance": 60.0,
            //         "lastUpdateBalance": "2024-02-13T22:18:56.395+00:00"
            //     }
            // ]
            // setAccount(data);
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
                <div className='row mt-3'>
                    <div className='col-md-4 offset-md-4'>
                        <div className='d-grid mx-auto'>
                            <Link to={{pathname:"/debit_accounts/form"}}>
                                <button className='btn btn-dark'
                                onClick={() => clearState()}
                                >
                                    <i className='fa-solid fa-circle-plus'></i> Añadir
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                        <div className='table-responsive'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Banco</th>
                                        <th>Tarjeta</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className='table-group-divider'>
                                    {accounts.map( (account, i) => (
                                        <tr key={account.idAccount}>
                                            <td>{(i+1)}</td>
                                            <td>
                                                <Link to={{pathname:"/debit_accounts/detail" }} 
                                                      onClick={() => addAccountState(account)}>
                                                    {account.issuingBank}
                                                </Link>
                                            </td>
                                            <td>{account.cardholderName}</td>
                                            <td>
                                                <Link to={{pathname:"/debit_accounts/form" }} onClick={() => addAccountState(account)}>
                                                    <i className='fa-solid fa-edit'/>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DebitAccounts