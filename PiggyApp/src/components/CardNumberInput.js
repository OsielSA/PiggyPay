import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

const CardNumberInput = ({ initialValue, onChange }) => {
  const [cardNumber, setCardNumber] = useState('');

  useEffect(() => {
    if (initialValue) {
      let formattedInput = initialValue.replace(/\D/g, '').slice(0, 16);
      formattedInput = formattedInput.replace(/(\d{4})/g, '$1 ').trim();
      setCardNumber(formattedInput);
    }
  }, [initialValue]);

  const handleCardNumber = (event) => {
    let input = event.target.value.replace(/\D/g, '');
    input = input.slice(0, 16);
    const formattedInput = input.replace(/(\d{4})/g, '$1 ').trim();
    setCardNumber(formattedInput);

    if (onChange) {
      onChange(formattedInput);
    }
  };

  return (
    <Form.Group controlId="formCardNumber" className='mb-3'>
      <Form.Label className="fw-bold">Número tarjeta</Form.Label>
      <Form.Control type="text" value={cardNumber} onChange={handleCardNumber} inputMode="numeric"/>
    </Form.Group>
  );
};

export default CardNumberInput;
