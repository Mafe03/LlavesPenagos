import React, { useState } from "react";
import Navbar from "../Ecommerce/NavbarE";
import { Outlet, Navigate } from "react-router-dom";
import UseAuth from "../../helper/UseAuth";
/**
 * Componente funcional que define el diseño principal de la aplicación cuando el usuario está autenticado.
 * @function LayoutE
 * @returns {JSX.Element} JSX que representa el diseño principal cuando el usuario está autenticado.
 */
const LayoutE = () => {
  // Obtener información de autenticación
  const { Autenticado } = UseAuth();
  return (
    <>
      {/* Cuerpo del layout */}
      <body>
        {/* Barra de navegación */}
        <Navbar />
        {/* Renderizar las rutas internas si el usuario está autenticado, de lo contrario, redirigir a la página de inicio */}
        {Autenticado.idUsuario ? <Outlet /> : <Navigate to={"/"} />}
      </body>
    </>
  );
};

export default LayoutE;
