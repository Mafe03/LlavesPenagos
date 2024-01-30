import React, { useState } from "react";
import User from "../../assets/img/avatar/avatar-illustrated-01.png";
import { NavLink } from "react-router-dom";
<<<<<<< HEAD
/**
 * Componente de barra lateral con enlaces de navegación.
 * @component
 * @returns {JSX.Element} JSX para renderizar la barra lateral.
 */
=======
import logo from "../../assets/images/logoLlaves.png";

>>>>>>> c952e302e1aad699223802829b6f2720e06407ff
const Aside = () => {
  const datos = JSON.parse(localStorage.getItem("user2"));
  return (
    <>
      {/* Barra lateral */}
      <aside className="sidebar">
        <div className="sidebar-start">
<<<<<<< HEAD
          {/* Encabezado de la barra lateral */}
          <div className="sidebar-head">
            {/* Enlace al dashboard con el logo */}
=======
          <div className="sidebar-head ">
>>>>>>> c952e302e1aad699223802829b6f2720e06407ff
            <a href="/Dashboard" className="logo-wrapper" title="Home">
              {/* Logo */}
              <span className="sr-only">Home</span>
<<<<<<< HEAD
              <span className="icon logo" aria-hidden="true"></span>
              {/* Texto del logo */}
              <div className="logo-text">
                <span className="logo-title">Llaves y Extintores</span>
                <span className="logo-subtitle">Penagos</span>
              </div>
            </a>
            {/* Botón de alternar la barra lateral */}
            <button
              className="sidebar-toggle transparent-btn"
              title="Menu"
              type="button"
            >
              <span className="sr-only">Toggle menu</span>
              <span className="icon menu-toggle" aria-hidden="true"></span>
            </button>
          </div>
          {/* Cuerpo de la barra lateral con menú de enlaces */}
=======
              <img src={logo} alt="" width={"75%"} className="m-auto mt-2" />
            </a>
          </div>

>>>>>>> c952e302e1aad699223802829b6f2720e06407ff
          <div className="sidebar-body">
            <ul className="sidebar-body-menu">
              <li>
                <NavLink to="/Dashboard">
                  <span className="icon user-3" aria-hidden="true"></span>
                  Empleado
                </NavLink>
              </li>
              <li>
                <NavLink to="Categorias">
                  <span className="icon message" aria-hidden="true"></span>
                  Categorias
                </NavLink>
              </li>
              <li>
                <NavLink to="Productos">
                  <span className="icon dropbox" aria-hidden="true"></span>
                  Productos
                </NavLink>
              </li>
              <li>
                <NavLink to="Clientes">
                  <span className="icon user-3" aria-hidden="true"></span>
                  Clientes
                </NavLink>
              </li>
              <li>
                <NavLink to="MetodoPago">
                  <span className="icon folder" aria-hidden="true"></span>
                  Metodo de Pago
                </NavLink>
              </li>
              <li>
                <NavLink to="Pedidos">
                  <span className="icon google-drive" aria-hidden="true"></span>
                  Pedidos
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* Pie de la barra lateral con información del usuario */}
        <div className="sidebar-footer">
          <a href="##" className="sidebar-user">
            <span className="sidebar-user-img">
              <picture>
                <img src={User} />
              </picture>
            </span>
            <div className="sidebar-user-info">
              <span className="sidebar-user__title">
                {" "}
                {datos.nombre} {datos.apellido}
              </span>
              <span className="sidebar-user__subtitle">
                Empleado:{datos.idEmpleado}
              </span>
            </div>
          </a>
        </div>
      </aside>
    </>
  );
};

export default Aside;
