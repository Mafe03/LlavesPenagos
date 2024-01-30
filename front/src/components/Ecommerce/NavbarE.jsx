import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import extintor from "../../assets/images/extinot.png";

/**
 * Componente funcional que representa la barra de navegación personalizada para la sección de comercio electrónico.
 * @function NarvbarE
 * @returns {JSX.Element} JSX que representa la barra de navegación.
 */
const NarvbarE = () => {
  // Estado para controlar la visibilidad del Offcanvas
  const [show, setShow] = useState(false);
  // Función para cerrar el Offcanvas

  const handleClose = () => {
    setShow(false);
  };
  // Función para mostrar el Offcanvas
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      {/* Offcanvas para el carrito */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton id="gradient">
          <Offcanvas.Title>Tu carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="fixed-body d-flex flex-column">
          <div class="d-flex">
            <div class="p-2 flex-fill">
              <img
                width="100px"
                className=""
                src="https://websitedemos.net/egrow-plants-04/wp-content/uploads/sites/1114/2022/07/flower-008-a-400x550.jpg"
                alt=""
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="p-2 flex-fill">
              <p className="mt-3">Camiseta</p>
              <p className="mt-3"> $ 120.000</p>
              <div className="d-flex align-items-center mt-3">
                <div
                  className="input-group mb-3 d-flex align-items-center quantity-container"
                  style={{ maxWidth: "120px" }}
                >
                  <div className="input-group-prepend">
                    <button
                      className="btn btn-outline-black decrease"
                      type="button"
                    >
                      -
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control text-center quantity-amount"
                    value="1"
                    placeholder=""
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-black increase"
                      type="button"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Icono para eliminar del carrito */}
            <div class="align-self-center">
              {" "}
              <i class="fa-solid fa-delete-left"></i>
            </div>
          </div>
          {/* Espacio para ajustar la posición del contenido */}
          <div style={{ marginBottom: "265px" }}></div>

          <div className="d-grid gap-2 ">
            <hr />
            <div class="d-flex">
              <div class="p-2">Total:</div>
              <div class="ms-auto p-2">$ 120.000</div>
            </div>
            <NavLink to="/Ecommerce/Carrito">
              <button className="btn btn-gradient w-100 ">
                <i className="fa-solid fa-eye"></i> Ver carrito
              </button>
            </NavLink>
            <button className="btn btn-gradient2 w-100">
              <i className="fa-solid fa-star"></i> Comprar ahora
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {/* Barra de navegación principal */}
      <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
        arial-label="Furni navigation bar"
        id="nav"
      >
        <div className="container">
          <NavLink to="/Ecommerce">
            <a className="navbar-brand"></a>
          </NavLink>

          {/* Botón para alternar la visibilidad del menú en dispositivos móviles */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Contenido del menú */}
          <div className="collapse navbar-collapse" id="navbarsFurni">
            {/* Enlaces de navegación */}
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item">
                <NavLink to="/Ecommerce">
                  <a className="nav-link">Inicio</a>
                </NavLink>
              </li>
              <li>
                <NavLink to="Producto">
                  <a className="nav-link">Productos</a>
                </NavLink>
              </li>
              <li>
                <NavLink to="Servicio">
                  <a className="nav-link">Servicios</a>
                </NavLink>
              </li>
              <li>
                <a className="nav-link" href="services.html">
                  Sobre Nosotros
                </a>
              </li>
            </ul>
            {/* Íconos de usuario y carrito */}
            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <a className="nav-link" href="#">
                  <img src="images/user.svg" />
                </a>
              </li>
              <li>
                <a className="nav-link" onClick={handleShow}>
                  <i class="bi bi-cart4"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NarvbarE;
