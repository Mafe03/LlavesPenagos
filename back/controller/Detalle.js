const { Detal, sequelize } = require("../models/Conexion");
const { QueryTypes } = require("sequelize");
/**
 * Agrega un detalle a un encabezado existente.
 *
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {void}
 */

const AgregarDetalle = async (req, res) => {
  try {
    // Obtener el máximo idEncabezado existente
    const MaximoEncabezado = await sequelize.query(
      "SELECT MAX(idEncabezado) AS maximo FROM encabezado",
      { type: QueryTypes.SELECT }
    );

    const idEncabezado = MaximoEncabezado[0].maximo;
    // Crear un nuevo detalle asociado al idEncabezado obtenido
    const Detalle = await Detal.create({
      ...req.body,
      idEncabezado: idEncabezado,
    });

    const cantidadProducto = await sequelize.query(
      `SELECT productos.cantidad FROM productos WHERE productos.idProducto = ${req.body.idProducto}`,
      { type: QueryTypes.SELECT }
    );

    let cantidadCliente = req.body.cantidad;
    // Obtener la cantidad del producto del detalle recién agregado
    let nuevaCantidad = cantidadProducto[0].cantidad - cantidadCliente;

    // Actualizar la cantidad del producto en la base de datos
    const Actualizacion = await sequelize.query(
      `UPDATE productos SET cantidad=${nuevaCantidad}`,
      { type: QueryTypes.UPDATE }
    );

    res.send({ id: 200, mensaje: "Encabezado agregado" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};
/**
 * Lista todos los detalles con información adicional de productos.
 *
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {void}
 */
const ListarDetalle = async (req, res) => {
  const Detalles = await sequelize.query(
    "SELECT detalle.idDetalle, detalle.cantidad, detalle.totalProd, productos.idProducto, productos.nombre, detalle.idEncabezado FROM detalle JOIN productos ON detalle.idProducto=productos.idProducto",
    { type: QueryTypes.SELECT }
  );
  res.send({ id: 200, mensaje: Detalles });
};

module.exports = {
  AgregarDetalle,
  ListarDetalle,
};
