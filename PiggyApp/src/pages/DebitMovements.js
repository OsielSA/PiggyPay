import React , { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { API_URLS } from '../apiConfig';
import { format } from 'date-fns';
import esLocale from 'date-fns/locale/es';
import axios from 'axios';
import Form from "react-bootstrap/Form";
import ThemedButton from '../components/ThemedButton/ThemedButton';
import ThemedToggleButton from '../components/ThemedToggleButton/ThemedToggleButton';

function formatDate (dateMovement){
    var date = new Date(Date.parse('2024-02-29T00:00:00Z'));
    return String(date);//format(date, 'dd LLL ', { locale: esLocale });
}
const DebitMovements = () => {
    const account = useSelector((state) => state.account)
    const [movements, setMovements] = useState([]);

    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    
    const radios = [
        { name: 'Ingreso', value: true },
        { name: 'Egreso', value: false },
    ]
    const [selectedOption, setSelectedOption] = useState(true);

    const handleToggleEvent = (value) => {
        setSelectedOption(value);
    };

    const getMovements = async () => {
        try {
            var url_getMovements = API_URLS.GET_MOVEMENTS.replace('{idAccount}', account.idAccount)
            const response = await axios.get(url_getMovements);
            setMovements(response.data);
        } catch (error) {
            console.error('Error al obtener datos de la API', error);
        }
    }

    const [openAddMovemnt, setOpenAddMovement] = useState(false);
    useEffect ( () => {
        // console.log("idAccount: " + account.idAccount);
        if(account.idAccount != '')
            getMovements();
    }, []);

    const handleAddMovement = () => {
        setOpenAddMovement(true);
    }
    const handleCancelMovement = () => {
        setOpenAddMovement(false);
    }
    const handleConfirmAddMovement = () => {
        const parameters = {
            idAccount: account.idAccount,
            amount: amount,
            descriptionMovement: description,
            typeMovement: selectedOption,
            dateMovement: new Date(date).toISOString().split('T')[0]
        }
        saveMovement('POST', parameters)
    }

    const handleAmountChange = (event) => { setAmount(event.target.value); }
    const handleDescriptionChange = (event) => { setDescription(event.target.value); }
    const handleDateChange = (event) => { setDate(event.target.value); }

    const saveMovement = async(method, parameters) => {
        console.log(parameters);
        await axios({method: method, url:API_URLS.SAVE_MOVEMENT, data:parameters}).then(function(response){
            var type = response.data[0];
            var msj = response.data[1];
        });
        alert("Guardado exitosamente" );
        setOpenAddMovement(false);
        getMovements();
    }
    return (
        <div>
            {!openAddMovemnt &&
            <div style={{textAlign:'center', marginTop:'10px'}}>
                <ThemedButton initialValue='Agregar movimiento' variant='btn-primary-color' icon="fa-solid fa-plus" style={{fontSize: '14px'}} onClick={handleAddMovement}/>
            </div>
            }
            {openAddMovemnt &&
            <div className='container' style={{marginTop:'10px'}}>
                <div className='row'>
                    <div className='col-3'>
                    <Form.Group controlId="formAmount" className='mb-3'>
                        <Form.Label className="fw-bold">Cantidad</Form.Label>
                        <Form.Control type="number" inputMode="numeric" onChange={handleAmountChange}/>
                    </Form.Group>
                    </div>
                    <div className='col-5'>
                        <Form.Group controlId="formDesc" className='mb-3'>
                            <Form.Label className="fw-bold">Descripcion</Form.Label>
                            <Form.Control type="text" onChange={handleDescriptionChange} />
                        </Form.Group>
                    </div>
                    <div className='col-4'>
                        <Form.Group controlId="formFecha" className='mb-3'>
                            <Form.Label className="fw-bold">Fecha</Form.Label>
                            <Form.Control type="date" onChange={handleDateChange} />
                        </Form.Group>
                    </div>
                </div>
                <div>
                    <div className='row justify-content-end'>
                        <div className='col-6'>
                            <ThemedToggleButton 
                                radios={radios}
                                radioSelected={selectedOption}
                                onToggleEvent={handleToggleEvent} 
                                style={{fontSize:'14px', height:'25px', display: 'flex', alignItems: 'center'}}
                            />
                        </div>
                        <div className='col-3' style={{paddingRight:'10px'}}>
                            <ThemedButton initialValue='Cancelar' variant='btn-secondary-color' style={{fontSize: '14px'}} onClick={handleCancelMovement}/>
                        </div>
                        <div className='col-3' style={{paddingRight:'10px'}}>
                            <ThemedButton initialValue='Agregar' variant='btn-primary-color' style={{fontSize: '14px'}} onClick={handleConfirmAddMovement} />
                        </div>

                    </div>
                </div>
            </div>
            }
            <hr />
            {movements.map( (movement, i) => (
                <div className='row' key={movement.idMovement} style={{paddingLeft:'10px', paddingRight:'10px',}}>
                    <div className='col-9'>
                        <div><label>{movement.descriptionMovement}</label></div>
                        <div><label>{formatDate(movement.dateMovement)}-{movement.dateMovement}</label></div>
                    </div>
                    <div className='col-3' style={{textAlign: 'right'}}>
                        <label>${movement.amount}</label>
                    </div>
                    <hr style={
                        {marginTop:'15px'}
                    }/>
                </div>               
            ))}
        </div>

    );
}

export default DebitMovements;