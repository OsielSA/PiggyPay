import React , { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const DebitSections = () => {
    const account = useSelector((state) => state.account)

    useEffect ( () => {
        console.log("sections: " + account.allowsSections);
    }, []);
    return (
        <div className='container'>
            
            {!account.allowsSections && 
            <div style={{textAlign: 'center', marginTop:'30px'}}>
                <label>Esta tarjeta no permite apartados</label>
            </div>
            }
            {account.allowsSections && 
            <p>Apartados</p>
            }
        </div>
    );
}

export default DebitSections;