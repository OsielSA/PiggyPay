import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { API_URLS } from '../apiConfig';
import axios from 'axios';
import ReturnBar from './ReturnBar';
import CardNumberInput from './CardNumberInput';
import PiggyButton from './PiggyButton/PiggyButton';
import ConfirmationModal from './ConfirmationModal';

const FormDebitAccount = () => {
    const navigate = useNavigate();
    const account = useSelector((state) => state.account)

    const titleModal = (account.idAccount == '') ? 'Nueva Tarjeta' : 'Editar Tarjeta';
    const option = (account.idAccount == '') ? 1 : 0;
    const showDelete = (account.idAccount == '') ? false : true;
    const valueSelectAux = (account.allowsSections) ? '1' : '2';
    const valueSelect = (account.idAccount == '') ? '' : valueSelectAux;
    
    const [selectAllowsSections, setSelectAllowsSections] = useState(valueSelect);

    const [idAccount, setIdAccount] = useState('');
    const [issuingBank, setIssuingBank] = useState(account.issuingBank);
    const [cardholderName, setCardholderName] = useState(account.cardholderName);
    const [cardNumber, setCardNumber] = useState(account.cardNumber);
    const [currentBalance, setCurrentBalance] = useState(account.currentBalance);
    const [allowsSections, setAllowsSections] = useState(account.allowsSections);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleIssuingBankChange = (event) => { setIssuingBank(event.target.value); };
    const handleCardholderName = (event) => { setCardholderName(event.target.value); };
    const handleCardNumberChange = (formattedInput) => { setCardNumber(formattedInput); };
    const handleCurrentBalance = (event) => { setCurrentBalance(event.target.value); };
    const handleSelectAllowsSections = (event) => {
        setSelectAllowsSections(event.target.value);
        var valueSelect = event.target.value;
        if(valueSelect == '1')
            setAllowsSections(true);
        else if (valueSelect == '2')
            setAllowsSections(false);
    };
    const handleOpenModal = () => { setIsModalOpen(true); };
    const handleCloseModal = () => { setIsModalOpen(false); };
    const handleConfirmAction = () => {
        deleteAccount();
        handleCloseModal();
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
        // Realizar Validaciones

        ////////////////////////

        if(option == 1){
            var method = 'POST';
            saveAccount(method, parameters)
        }else{
            var method = 'PUT';
            updateAccount(method, parameters, account.idAccount)
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
        alert("Guardado exitosamente" );
        navigate('/debit_accounts');
    }
    const updateAccount = async(method, parameters, idAccount) => {
        var url_update = API_URLS.UPDATE_DEBIT_ACOUNT.replace('{idAccount}', idAccount)
        await axios({method: method, url:url_update, data:parameters}).then(function(response){
            var type = response.data[0];
            var msj = response.data[1];
        });
        alert("Editado exitosamente" );
        navigate('/debit_accounts');
    }
    const deleteAccount = async() => {
        var url_delete = API_URLS.DELETE_DEBIT_ACOUNT.replace('{idAccount}', account.idAccount) 
        await axios({method: 'DELETE', url:url_delete}).then(function(response){
            var type = response.data[0];
            var msj = response.data[1];
            console.log(response.data);
        });
        alert("Eliminado exitosamente" );
        navigate('/debit_accounts');
    };

    return (
        <div>
            <ReturnBar title={titleModal} pathname="/debit_accounts" />
            <div>
                <div style={{padding: '30px'}}>
                    <Form.Group controlId="formBank2" className='mb-3'>
                        <Form.Label className="fw-bold">Banco</Form.Label>
                        <Form.Control type="text" value={issuingBank} onChange={handleIssuingBankChange}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formCardholder" className='mb-3'>
                        <Form.Label className="fw-bold">Nombre de la tarjeta</Form.Label>
                        <Form.Control type="text" value={cardholderName} onChange={handleCardholderName}></Form.Control>
                    </Form.Group>

                    <CardNumberInput initialValue={cardNumber} onChange={handleCardNumberChange}/>

                    <Form.Group controlId="formCurrentBalance" className='mb-3'>
                        <Form.Label className="fw-bold">Saldo actual</Form.Label>
                        <Form.Control type="number" value={currentBalance} onChange={handleCurrentBalance} inputMode="numeric"></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formAllowsSections" className='mb-3'>
                        <Form.Label className="fw-bold">Permite apartados</Form.Label>
                        <Form.Select value={selectAllowsSections} onChange={handleSelectAllowsSections}>
                            <option>Seleccione una opcion</option>
                            <option value="1">Si</option>
                            <option value="2">No</option>
                        </Form.Select>
                    </Form.Group>
                    
                </div>
                
                <div style={{textAlign:"center"}}>
                    {showDelete && (
                        <div className="row" style={{ marginTop: '30px' }}>
                            <div className='col-6'>
                                <PiggyButton variant='btn-danger-color' onClick={handleOpenModal} initialValue='Eliminar' icon='fa-solid fa-trash-can'/>
                            </div>
                            <div className='col-6'>
                                <PiggyButton variant='btn-primary-color' onClick={validar} initialValue='Guardar' icon='fa-solid fa-floppy-disk' />
                            </div>
                        </div>
                    )}
                    {!showDelete && (
                        <div className="row" style={{ marginTop: '30px' }}>
                            <div className='col-12'>
                            <PiggyButton variant='btn-primary-color' onClick={validar} initialValue='Guardar' icon='fa-solid fa-floppy-disk'/></div>
                        </div>
                    )}

                    {isModalOpen && (
                        <ConfirmationModal
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        onConfirm={handleConfirmAction}
                        />
                    )}
                </div>
                
            </div>
        </div>
    );
}

export default FormDebitAccount;