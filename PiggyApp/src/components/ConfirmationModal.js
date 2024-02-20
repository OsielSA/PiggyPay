// ConfirmationModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ButtonDanger from './ButtonDanger/ButtonDanger';

function ConfirmationModal({ isOpen, onClose, onConfirm }) {
    const secondaryStyle = {
        padding: '5px 20px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#939393',
        borderColor: '#939393',
        color: '#ffffff',
        transition: 'background-color 0.3s ease',
    }
    return (
        <Modal show={isOpen} onHide={onClose} centered size="sm">
            <Modal.Header closeButton>
                <Modal.Title>Eliminar Tarjeta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>¿Estás seguro de eliminar está tarjeta?</p>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={onClose} style={secondaryStyle}>Cancelar</button>
                <ButtonDanger onClick={onConfirm} useIcon={false}></ButtonDanger>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmationModal;
