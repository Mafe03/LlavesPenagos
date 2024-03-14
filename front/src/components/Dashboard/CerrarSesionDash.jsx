import UseAuth from "../../helper/UseAuthDash";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Componente funcional que realiza las operaciones necesarias al cerrar sesión.
 * @component
 * @example
 * // Uso del componente en otro archivo React
 * import CerrarSesionDash from "./RutaDondeEstaElComponente";
 * // ...
 * <CerrarSesionDash />
 */
const CerrarSesionDash = () => {
  const { setAutenticado } = UseAuth();
  const Navigate = useNavigate();
  /**
   * Efecto secundario que se ejecuta al montar el componente.
   * Limpia el almacenamiento local, actualiza el estado de autenticación y redirige al usuario.
   * @function
   * @name useEffect
   * @param {Function} callback - Función a ejecutar al montar el componente.
   */
  useEffect(() => {
    localStorage.clear();
    setAutenticado({});
    Navigate("/LoginDash");
  });

  /**
   * Renderiza un mensaje indicando que se está cerrando la sesión.
   * @returns {JSX.Element} - Elemento JSX que representa el mensaje de cierre de sesión.
   */
  return (
    <>
      <h1>Cerrando sesion .....</h1>
    </>
  );
};

export default CerrarSesionDash;
