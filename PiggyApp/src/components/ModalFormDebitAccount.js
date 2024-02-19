import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { API_URLS } from '../apiConfig';
import axios from 'axios';
import { bootbox } from 'bootbox'

const ModalFormDebitAccount = () => {
    const account = useSelector((state) => state.account)

    const titleModal = (account.idAccount == '') ? 'Agregar Tarjeta' : 'Editar Tarjeta';
    const option = (account.idAccount == '') ? 1 : 0;
    const showDelete = (account.idAccount == '') ? false : true;
    const valueSelectAux = (account.allowsSections) ? '1' : '2';
    const valueSelect = (account.idAccount == '') ? '' : valueSelectAux;
    
    const [accounts, setAccount] = useState([]);

    const [selectAllowsSections, setSelectAllowsSections] = useState(valueSelect);

    const [idAccount, setIdAccount] = useState('');
    const [issuingBank, setIssuingBank] = useState(account.issuingBank);
    const [cardholderName, setCardholderName] = useState(account.cardholderName);
    const [cardNumber, setCardNumber] = useState(account.cardNumber);
    const [currentBalance, setCurrentBalance] = useState(account.currentBalance);
    const [allowsSections, setAllowsSections] = useState(account.allowsSections);

    // useEffect(() => {
    //     setIssuingBank(account.issuingBank || ''); // Garantiza que sea una cadena
    //   }, [account.issuingBank]);


    const handleIssuingBankChange = (event) => { setIssuingBank(event.target.value); };
    const handleCardholderName = (event) => { setCardholderName(event.target.value); };
    const handleCardNumber = (event) => { setCardNumber(event.target.value); };
    const handleCurrentBalance = (event) => { setCurrentBalance(event.target.value); };
    const handleSelectAllowsSections = (event) => {
        setSelectAllowsSections(event.target.value);
        var valueSelect = event.target.value;
        if(valueSelect == '1')
            setAllowsSections(true);
        else if (valueSelect == '2')
            setAllowsSections(false);
    };

    const validar = () => {
        var parameters;

        parameters = {
            "idUser": 1,
            "cardholderName": cardholderName,
            "issuingBank": issuingBank,
            "cardNumber": cardNumber.replace(/\s/g, ''),
            "allowsSections": allowsSections,
            "currentBalance": currentBalance
        }
        //Realizar Validaciones
        if(option == 1){
            var method = 'POST';
            saveAccount(method, parameters)
            // alert("Guardar")
        }else{
            var method = 'PUT';
            updateAccount(method, parameters, account.idAccount)
            // alert("actualizar")
        }
    };
    const saveAccount = async(method, parameters) => {
        console.log(method)
        console.log(parameters)
        await axios({method: method, url:API_URLS.SAVE_DEBIT_ACOUNT, data:parameters}).then(function(response){
            var type = response.data[0];
            var msj = response.data[1];
            console.log(response.data);
        });
    }
    const updateAccount = async(method, parameters, idAccount) => {
        var url_update = API_URLS.UPDATE_DEBIT_ACOUNT.replace('{idAccount}', idAccount)
        await axios({method: method, url:url_update, data:parameters}).then(function(response){
            var type = response.data[0];
            var msj = response.data[1];
        });
        // getAccounts();
    }
    const deleteAccount = async() => {
        var url_delete = API_URLS.DELETE_DEBIT_ACOUNT.replace('{idAccount}', account.idAccount) 
        await axios({method: 'DELETE', url:url_delete}).then(function(response){
            var type = response.data[0];
            var msj = response.data[1];
            console.log(response.data);
        });
        alert("Eliminado " + idAccount);
    };

    return (
        <div>
            <div className='backBar'>
                <Link style={{color: "#F3F3F3"}} to={{pathname:"/debit_accounts"}}>
                    <i className="fa-solid fa-arrow-left"></i><label className='backText'>Regresar</label>
                </Link>
            </div>
            <div>
                {/* Header */}
                <div>
                    <label>{titleModal}</label>
                </div>
                {/* Body */}
                <div>
                    <Form.Group controlId="formBank2" className='mb-3'>
                        <Form.Label>Banco</Form.Label>
                        <Form.Control type="text" value={issuingBank} onChange={handleIssuingBankChange}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formCardholder" className='mb-3'>
                        <Form.Label>Nombre de la tarjeta</Form.Label>
                        <Form.Control type="text" value={cardholderName} onChange={handleCardholderName}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formCardNumber" className='mb-3'>
                        <Form.Label>Número tarjeta</Form.Label>
                        <Form.Control type="text" value={cardNumber} onChange={handleCardNumber}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formCurrentBalance" className='mb-3'>
                        <Form.Label>Saldo actual</Form.Label>
                        <Form.Control type="number" value={currentBalance} onChange={handleCurrentBalance}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formAllowsSections" className='mb-3'>
                        <Form.Label>Permite apartados</Form.Label>
                        <Form.Select value={selectAllowsSections} onChange={handleSelectAllowsSections}>
                            <option>Seleccione una opcion</option>
                            <option value="1">Si</option>
                            <option value="2">No</option>
                        </Form.Select>
                    </Form.Group>
                    {showDelete && (
                        <div className="d-grid gap-2" style={{ marginTop: '30px' }}>
                            <Button variant="outline-danger" size="sm" onClick={() => deleteAccount()}><i className="fa-solid fa-trash-can"></i>Eliminar</Button>
                        </div>
                    )}
                </div>
                {/* Footer */}
                <div>
                    <Button variant="primary" onClick={() => validar()}>Guardar</Button>
                </div>
            </div>
        </div>
    );
}

export default ModalFormDebitAccount;