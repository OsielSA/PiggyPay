import React , { useEffect, useState } from 'react';
import {ButtonGroup, ToggleButton } from 'react-bootstrap';
import './PrimaryToggleButton.css'

const ThemedToggleButton = ({radios, radioSelected, onToggleEvent, style }) => {
    const radiosP = radios;
    const [radioValue, setRadioValue] = React.useState(radioSelected);

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
                    style={style}
                >
                {radio.name}
              </button>
            ))}
            </ButtonGroup>
        </div>
    );
}

export default ThemedToggleButton;