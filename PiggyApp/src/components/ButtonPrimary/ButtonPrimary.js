import React from 'react';
import { Button } from 'react-bootstrap';
import './ButtonPrimary.css';

const ButtonPrimary = ({initialValue, onClick}) => {
  return (
    <button className="btn-primary-color" onClick={onClick}><i className="fa-solid fa-floppy-disk"></i> {initialValue}</button>
  );
};

export default ButtonPrimary;