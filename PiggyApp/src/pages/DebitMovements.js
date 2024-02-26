import React , { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { API_URLS } from '../apiConfig';
import axios from 'axios';


const DebitMovements = () => {
    const account = useSelector((state) => state.account)
    const [movements, setMovements] = useState([]);

    const getMovements = async () => {
        try {
            var url_getMovements = API_URLS.GET_MOVEMENTS.replace('{idAccount}', account.idAccount)
            console.log(url_getMovements);
            const response = await axios.get(url_getMovements);
            setMovements(response.data);

            console.log(response.data)
        } catch (error) {
            console.error('Error al obtener datos de la API', error);
        }
    }

    useEffect ( () => {
        // console.log("idAccount: " + account.idAccount);
        getMovements();
    }, []);

    return (
        <div>
            <p>Movimientos</p>
            <br></br>
            {movements.map( (movement, i) => (
                <label>{movement.descriptionMovement}</label>
            ))}
            
        </div>

    );
}

export default DebitMovements;