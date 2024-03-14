import React, { useState, useEffect } from "react";
import Avatar from "../../assets/images/useravatar.png";
import Modal from "react-bootstrap/Modal";
/**
 * Componente funcional que representa la página de perfil del usuario.
 *
 * @component
 * @example
 * // Uso del componente en otro archivo de React
 * import Perfil from './Perfil';
 * const App = () => {
 *   return <Perfil />;
 * }
 */
const Perfil = (props) => {
  /**
   * Estado que almacena los datos del usuario.
   * @type {Array}
   */
  const [datos, SetDatos] = useState([]);
  /**
   * Token de autorización almacenado en el localStorage.
   * @type {string|null}
   */
  const token = localStorage.getItem("token");
  /**
   * Datos del usuario almacenados en el localStorage.
   * @type {Object|null}
   */
  const datos1 = JSON.parse(localStorage.getItem("user"));
  /**
   * Estado que almacena los encabezados de las facturas del usuario.
   * @type {Array}
   */
  const [encabezados, setEncabezados] = useState([]);
  /**
   * Estado que almacena los detalles de una factura específica.
   * @type {Array}
   */
  const [detalle, setDetalle] = useState([]);
  /**
   * Estado que almacena la información para mostrar en un modal.
   * @type {Object}
   */
  const [modalData, setModalData] = useState({ fecha: "", total: 0, id: 0 });
  /**
   * Función asíncrona para obtener los encabezados de las facturas del usuario.
   * @function
   * @async
   * @name EncabezadoUser
   */
  const EncabezadoUser = async () => {
    const request = await fetch(
      `http://localhost:3600/encabezado/listarEncaUser/${datos1.idUsuario}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `${token}`,
        },
      }
    );

    const data = await request.json();
    //console.log(data);
    setEncabezados([]);
    setEncabezados(data.mensaje);
    //console.log(encabezados);
  };
  /**
   * Función asíncrona para obtener los datos del usuario.
   * @function
   * @async
   * @name traer
   */

  const traer = async () => {
    const usuario = await fetch(
      `http://localhost:3600/usuarios/listarUno/${datos1.idUsuario}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
    const datosuser = await usuario.json();

    SetDatos(datosuser.mensaje);
  };
  /**
   * Efecto que se ejecuta al montar el componente para obtener datos y encabezados.
   * @effect
   * @name useEffect
   */
  useEffect(() => {
    traer();
    //console.log(datos);
  }, []);

  /**
   * Función para formatear el precio en formato de moneda.
   * @function
   * @param {number} precio - Precio a formatear.
   * @returns {string} Precio formateado en formato de moneda.
   * @name formatearPrecio
   */
  const formatearPrecio = (precio) => {
    return precio.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  useEffect(() => {
    EncabezadoUser();
    //console.log(encabezados);
  }, []);

  const listarDetEnca = async (id) => {
    const request = await fetch(
      `http://localhost:3600/detalle/listarDetEnca/${id}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
    const data = await request.json();
    //console.log(data);
    setDetalle([]);
    setDetalle(data.mensaje);
    // console.log("Detalle", detalle);
  };
  const fechaFormateada = (fecha) => {
    const fechaFormateada = new Date(fecha).toLocaleString("es-ES", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "UTC",
    });
    return fechaFormateada;
  };

  //
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => {
    setShow2(false);
  };

  const handleShow2 = (fecha, total, id) => {
    setShow2(true);
    setModalData({ fecha, total, id });
  };
  return (
    <>
      <Modal
        show={show2}
        onHide={handleClose2}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="border p-4">
              <h2 className="mb-4 m-2">Factura #{modalData.id}</h2>
              <p className="m-2">Fecha: {fechaFormateada(modalData.fecha)}</p>

              <h3 className="mt-4 m-2">Información del Cliente</h3>
              {datos.map((dato) => {
                return (
                  <>
                    <p className="m-2">
                      Nombre: {dato.nombre} {dato.apellido}
                    </p>
                    <p className="m-2">Dirección: {dato.direccion} </p>
                    <p className="m-2">Correo Electrónico: {dato.email}</p>
                    <p className="m-2">Telefono: {dato.telefono}</p>
                  </>
                );
              })}

              <h3 className="mt-4 m-2">Detalle de la Factura</h3>
              <table className="table m-2">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {detalle.map((detal) => {
                    return (
                      <tr>
                        <td>
                          <img
                            src={detal.imagen}
                            alt=""
                            style={{ width: "55px", height: "55px" }}
                          />
                        </td>
                        <td>{detal.nombre}</td>
                        <td>{detal.cantidad}</td>
                        <td>$ {formatearPrecio(detal.totalProd)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="text-end">
                <p className="fw-bold">
                  Total: ${formatearPrecio(modalData.total)}
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <div className="untree_co-section product-section before-footer-section">
        <div className="container-sm">
          <section className="container py-5">
            <div className="row">
              <div className="col-3  ps-3">
                <div
                  className="card"
                  style={{ width: "18rem", marginTop: "42%" }}
                >
                  <img
                    src={Avatar}
                    className="card-img-top"
                    alt="..."
                    width="100px"
                    height="250px"
                  />
                  {datos.map((dato) => {
                    return (
                      <>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            Nombre completo: {dato.nombre} {dato.apellido}
                          </li>
                          <li className="list-group-item">
                            Telefono: {dato.telefono}
                          </li>
                          <li className="list-group-item">
                            Correo: {dato.email}
                          </li>
                          <li className="list-group-item">
                            Direccion: {dato.direccion}
                          </li>
                        </ul>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="col-1 d-flex " style={{ marginTop: "9%" }}>
                <div class="vertical-line"></div>
              </div>
              <div className="col-8 mt-5 ">
                <div className="text-center ">
                  <h3>Facturas</h3>
                </div>
                <div className="site-blocks-table mt-5">
                  <table className="table border border-black  ">
                    <thead>
                      <tr id="tr2">
                        <th># Factura</th>
                        <th>Fecha y Hora</th>
                        <th>Total</th>
                        <th>Estado</th>
                        <th>Metodo de pago</th>
                        <th>Ver detalles</th>
                      </tr>
                    </thead>

                    <tbody>
                      {encabezados.length > 0 ? (
                        encabezados.map((encabezado) => {
                          return (
                            <tr>
                              <td>{encabezado.idEncabezado}</td>
                              <td>{fechaFormateada(encabezado.fechaHora)}</td>
                              <td>{formatearPrecio(encabezado.total)}</td>
                              <td>
                                {encabezado.idEstado === 0
                                  ? "Pendiente"
                                  : encabezado.idEstado === 1
                                  ? "Enviado"
                                  : "Cancelado"}
                              </td>
                              <td>{encabezado.descripcion}</td>
                              <td>
                                <button
                                  href="#"
                                  className="btn btn-dark btn-gradient"
                                  onClick={() => {
                                    listarDetEnca(encabezado.idEncabezado);
                                    handleShow2(
                                      encabezado.fechaHora,
                                      encabezado.total,
                                      encabezado.idEncabezado
                                    );
                                  }}
                                >
                                  <i className="bi bi-receipt"></i>
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <td>No hay productos</td>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Perfil;
