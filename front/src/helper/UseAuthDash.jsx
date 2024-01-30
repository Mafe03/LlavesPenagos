import React from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthProviderDash";

/**
 * Hook personalizado para acceder al contexto de autenticación.
 * @returns {Object} Objeto que representa el contexto de autenticación.
 * @example
 * // Uso del hook en un componente funcional.
 * const { user, isAuthenticated, login, logout } = UseAuthDash();
 */
const UseAuthDash = () => {
  return useContext(AuthContext);
};

export default UseAuthDash;
