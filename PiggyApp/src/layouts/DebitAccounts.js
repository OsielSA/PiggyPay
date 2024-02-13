import React, { useEffect, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap'
import { API_URLS } from '../apiConfig';
import axios from 'axios';


function formatearCadena(cadena) {
    if (cadena.length !== 16) {
      return cadena;
    }
    return cadena.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');
}

const DebitAccounts = () => {
    const url = API_URLS.DEBIT_ACOUNTS;    

    const [accounts, setAccount] = useState([]);
    const [titleModal, setTitleModal] = useState('');
    const [option, setOption] = useState('');
    const [selectAllowsSections, setSelectAllowsSections] = useState('');

    const [idAccount, setIdAccount] = useState('');
    const [issuingBank, setIssuingBank] = useState('');
    const [cardholderName, setCardholderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [currentBalance, setCurrentBalance] = useState('');
    const [allowsSections, setAllowsSections] = useState('');

    const getAccounts = async () => {
        try {
            const response = await axios.get(url);
            setAccount(response.data);
        } catch (error) {
            console.error('Error al obtener datos de la API', error);
        }
    } 

    useEffect ( () => {
        getAccounts();
    }, []);

    const [show, setShow] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (option, idAccount, issuingBank, cardholderName, cardNumber, currentBalance, allowsSections) => {
        setShow(true);
        if(option == 1) {
            setTitleModal('Agregar Tarjeta');
            setOption(1);
            setShowDelete(false);

            setIssuingBank('');
            setAllowsSections('');
            setCardholderName('');
            setCardNumber('');
            setCurrentBalance('');
            setSelectAllowsSections('');
        } else {
            setTitleModal('Editar Tarjeta');
            setOption(2);
            setShowDelete(true);

            setIdAccount(idAccount);
            setIssuingBank(issuingBank);
            setCardholderName(cardholderName);
            setCardNumber(formatearCadena(cardNumber));
            setCurrentBalance(currentBalance);
            if (allowsSections){
                setSelectAllowsSections("1");
                setAllowsSections(allowsSections);
            }else{
                setSelectAllowsSections("2");
                setAllowsSections(allowsSections);
            }
        }
    }

    const handleIssuingBankChange = (event) => {
        setIssuingBank(event.target.value);
    };
    const handleCardholderName = (event) => {
        setCardholderName(event.target.value);
    };
    const handleCardNumber = (event) => {
        setCardNumber(event.target.value);
    };
    const handleCurrentBalance = (event) => {
        setCurrentBalance(event.target.value);
    };
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
        
        
        console.log('allowsSections');
        console.log(allowsSections);
        parameters = {
            "idUser": 1,
            "cardholderName": cardholderName,
            "issuingBank": issuingBank,
            "cardNumber": cardNumber.replace(/\s/g, ''),
            "allowsSections": allowsSections,
            "currentBalance": currentBalance
        }
        //Realizar Validaciones
        console.log("option", option)
        if(option == 1){
            var method = 'POST';
            saveAccount(method, parameters)
        }else{
            var method = 'PUT';
            updateAccount(method, parameters, idAccount)
        }
        handleClose();
    }

    const saveAccount = async(method, parameters) => {
        console.log(method)
        console.log(parameters)
        await axios({method: method, url:API_URLS.SAVE_DEBIT_ACOUNT, data:parameters}).then(function(response){
            var type = response.data[0];
            var msj = response.data[1];
            console.log(response.data);
        });

        getAccounts();
    }
    const updateAccount = async(method, parameters, idAccount) => {
        var url_update = API_URLS.UPDATE_DEBIT_ACOUNT.replace('{idAccount}', idAccount)
        await axios({method: method, url:url_update, data:parameters}).then(function(response){
            var type = response.data[0];
            var msj = response.data[1];
        });
        getAccounts();
    }
    const deleteAccount = async() => {
        var url_delete = API_URLS.DELETE_DEBIT_ACOUNT.replace('{idAccount}', idAccount) 
        await axios({method: 'DELETE', url:url_delete}).then(function(response){
            var type = response.data[0];
            var msj = response.data[1];
            console.log(response.data);
        });
        alert("Eliminado " + idAccount);
        handleClose();
        getAccounts();
    };


    return (
        <div className='App'>
            <div className='container-fluid'>
                <div className='row mt-3'>
                    <div className='col-md-4 offset-md-4'>
                        <div className='d-grid mx-auto'>
                            <button className='btn btn-dark' onClick={() => handleShow(1)}>
                                <i className='fa-solid fa-circle-plus'></i> Añadir
                            </button>
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
                                            <td>{account.issuingBank}</td>
                                            <td>{account.cardholderName}</td>
                                            <td>
                                                <a onClick={() => 
                                                    handleShow(
                                                        2, //option
                                                        account.idAccount,
                                                        account.issuingBank,
                                                        account.cardholderName,
                                                        account.cardNumber,
                                                        account.currentBalance,
                                                        account.allowsSections
                                                    )}>
                                                    <i className='fa-solid fa-edit'/>
                                                </a>
                                                {/* <Button variant="outline-secondary"><i className='fa-solid fa-edit'/></Button> */}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{titleModal}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId="formBank" className='mb-3'>
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
                                <Button variant="outline-danger" size="sm" onClick={() => deleteAccount()}><i class="fa-solid fa-trash-can"></i>Eliminar</Button>    
                            </div>
                        )}
                                                                                
                    </Modal.Body>
                    <Modal.Footer>                        
                        <Button variant="primary" onClick={() => validar()}>Guardar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default DebitAccounts