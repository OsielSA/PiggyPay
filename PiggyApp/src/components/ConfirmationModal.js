// ConfirmationModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ThemedButton from './ThemedButton/ThemedButton';

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
                <div className='row'>
                        <ThemedButton variant='btn-secondary-color' initialValue='Cancelar' onClick={onClose} style={{width:'45%'}}/>
                        <ThemedButton variant='btn-danger-color' initialValue='Eliminar' onClick={onConfirm} style={{width:'45%', marginLeft:'10px'}}/>
                 
                    {/* <div className='col-6'>
                        <ThemedButton variant='btn-secondary-color' initialValue='Cancelar' onClick={onClose} />
                    </div>
                    <div className='col-6'>
                    </div> */}
                </div>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmationModal;
