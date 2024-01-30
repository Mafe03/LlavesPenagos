import UseAuth from "../../helper/UseAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Componente funcional para cerrar la sesión del usuario.
 * Limpia el almacenamiento local, restablece el estado de autenticación y redirige a la página de inicio.
 * @returns {JSX.Element} Componente de React.
 */
const Cerrar = () => {
  const { setAutenticado } = UseAuth();
  const Navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
    setAutenticado({});
    Navigate("/");
  });

  return (
    <>
      <h1>Cerrando sesion .....</h1>
    </>
  );
};

export default Cerrar;
