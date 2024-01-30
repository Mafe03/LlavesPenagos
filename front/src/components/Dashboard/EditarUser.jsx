import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

/**
 * Componente para editar un usuario mediante un modal.
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {boolean} show - Indica si el modal debe mostrarse o no.
 * @param {function} handleClose - Función para cerrar el modal.
 * @returns {JSX.Element} JSX para renderizar el modal de edición de usuarios.
 */
const EditarUser = (props, show, handleClose) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton id="gradient">
          <Modal.Title id="contained-modal-title-vcenter">
            Editar usuario
          </Modal.Title>
        </Modal.Header>
        <form action="">
          <Modal.Body>
            <div className="mb-2">
              <label className="form-label">Cedula</label>
              <input
                type="text"
                className="form-control border-secondary"
                id="idUser"
                name="idUser"
                readOnly
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Nombres</label>
              <input
                type="text"
                className="form-control border-secondary"
                id="nombresEdit"
                name="nombresEdit"
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Apellidos</label>
              <input
                type="text"
                className="form-control border-secondary"
                id="apellidosEdit"
                name="apellidosEdit"
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Telefono</label>
              <input
                type="number"
                className="form-control border-secondary"
                id="telefonoEdit"
                name="telefonoEdit"
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Direccion</label>
              <input
                type="text"
                className="form-control border-secondary"
                id="direccionEdit"
                name="direccionEdit"
              />
            </div>
            <div className="mb-2">
              <label for="exampleInputEmail1" className="form-label">
                Correo electronico
              </label>
              <input
                type="email"
                className="form-control border-secondary"
                id="emailEditar"
                name="emailEditar"
              />
            </div>

            <div className="mb-2">
              <label for="exampleInputPassword1" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control border-secondary"
                id="pass"
                name="pass"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button type="close" className=" btn-gradient2">
              <i class="fa-regular fa-rectangle-xmark"></i> Cerrar
            </button>
            <button type="submit" className=" btn-gradient">
              <i class="fas fa-edit"></i> Editar
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default EditarUser;
