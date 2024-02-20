import React from 'react';
import { Button } from 'react-bootstrap';
import './ButtonDanger.css';

const ButtonDanger = ({initialValue, onClick, useIcon = true}) => {
  return (
    // <button className="btn-custom-color" onClick={onClick}><i className="fa-solid fa-trash-can"></i> {initialValue}</button>
    <button onClick={onClick} className='btn-danger-color'>{useIcon && <i className="fa-solid fa-trash-can"></i>} Eliminar</button>
  );
};

export default ButtonDanger;