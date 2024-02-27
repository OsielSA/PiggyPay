import React , { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReturnBar from '../components/ReturnBar';
import CardDesign from '../components/CardDesing/CardDesign';
import ThemedToggleButton from '../components/ThemedToggleButton/ThemedToggleButton';
import DebitMovements from './DebitMovements';
import DebitSections from './DebitSections';

const DetailDebitAccount = () => {
    const account = useSelector((state) => state.account)
    const radios = [
        { name: 'Movimientos', value: '1' },
        { name: 'Apartados', value: '2' }
    ];
    const [selectedOption, setSelectedOption] = useState('1');

    const handleToggleEvent = (value) => {
        setSelectedOption(value);
    };
      
    // useEffect ( () => {
    //     console.log("DetailDebitAccount");
    // }, []);

    return (
        <div>
            <ReturnBar title='Regresar' pathname="/debit_accounts" />
            <div style={{marginTop: '10px'}}>
                <ThemedToggleButton radios={radios} radioSelected={selectedOption} onToggleEvent={handleToggleEvent}/>
            </div>

            {selectedOption === '1' && (
                <DebitMovements></DebitMovements>
            )}
            {selectedOption === '2' && (
                <DebitSections></DebitSections>
            )}
            <div></div>
        </div>
    );
}

export default DetailDebitAccount;