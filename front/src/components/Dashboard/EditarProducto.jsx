import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
/**
 * Componente para editar un producto mediante un modal.
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {boolean} show - Indica si el modal debe mostrarse o no.
 * @param {function} handleClose - Función para cerrar el modal.
 * @returns {JSX.Element} JSX para renderizar el modal de edición de productos.
 */
const EditarProducto = (props, show, handleClose) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditarProducto;
