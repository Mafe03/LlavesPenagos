import React from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

/**
 * Hook personalizado para acceder al contexto de autenticación.
 * @returns {Object} Objeto que representa el contexto de autenticación.
 * @example
 * // Uso del hook en un componente funcional.
 * const { user, isAuthenticated, login, logout } = UseAuth();
 */
const UseAuth = () => {
  return useContext(AuthContext);
};

export default UseAuth;
