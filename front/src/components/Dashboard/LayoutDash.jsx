import React, { useState } from "react";
import Aside from "./Aside";
import Navbar from "./Navbar";
import { Outlet, Navigate } from "react-router-dom";
import UseAuth from "../../helper/UseAuthDash";

/**
 * Componente principal del diseño de la aplicación.
 * Este componente organiza la interfaz de usuario, incluyendo la barra lateral (Aside),
 * la barra de navegación (Navbar) y el contenido principal (Outlet) basado en la autenticación del usuario.
 *
 * @component
 * @example
 * // Uso del componente en una ruta específica
 * <Route path="/dashboard" element={<LayoutDash />} />
 *
 * @returns {JSX.Element} El componente principal del diseño.
 */
const LayoutDash = () => {
  /**
   * Hook personalizado para gestionar la autenticación del usuario.
   * Proporciona información sobre si el usuario está autenticado y detalles adicionales.
   * @type {Object}
   * @property {boolean} usuarioAutenticado - Indica si el usuario está autenticado.
   * @property {Object} usuario - Detalles del usuario autenticado.
   * @property {string} usuario.idEmpleado - ID del empleado autenticado.
   */
  const { Autenticado } = UseAuth();
  return (
    <>
      <div className="page-flex">
        <Aside />
        <div className="main-wrapper">
          <Navbar />
          {Autenticado.idEmpleado ? <Outlet /> : <Navigate to={"/LoginDash"} />}
        </div>
      </div>
    </>
  );
};

export default LayoutDash;
