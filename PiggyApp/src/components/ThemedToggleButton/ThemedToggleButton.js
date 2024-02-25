import React , { useEffect, useState } from 'react';
import {ButtonGroup, ToggleButton } from 'react-bootstrap';
import './PrimaryToggleButton.css'

const ThemedToggleButton = ({radios, onToggleEvent }) => {
    const radiosP = radios;
    const [radioValue, setRadioValue] = React.useState('1');

    const handleRadioChange = (value) => {
        setRadioValue(value);
        onToggleEvent(value);
    };

    return (
        <div id="toggle-container">
            <ButtonGroup className="w-100">
            {radiosP.map((radio, idx) => (
                <button
                    key={idx}
                    className={`custom-toggle ${radioValue === radio.value ? 'checked' : ''}`}
                    onClick={() => handleRadioChange(radio.value)}
                >
                {radio.name}
              </button>
            ))}
            </ButtonGroup>
        </div>
    );
}

export default ThemedToggleButton;