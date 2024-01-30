const { MetodoP } = require("../models/Conexion");

/**
 * Agrega un nuevo método de pago.
 *
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {void}
 */
const AgregarMetodPago = async (req, res) => {
  try {
    const Metodos = await MetodoP.create(req.body);
    res.send({ id: 200, mensaje: "Metodo de pago agregado" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

/**
 * Edita la información de un método de pago por su identificador.
 *
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {void}
 */
const EditarMetodoPago = async (req, res) => {
  try {
    const Metodos = await MetodoP.update(req.body, {
      where: { idMetodo: req.params.id },
    });
    res.send({ id: 200, mensaje: "Metodo de pago editado" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

/**
 * Elimina un método de pago por su identificador.
 *
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {void}
 */
const EliminarMetodoPago = async (req, res) => {
  try {
    const Metodos = await MetodoP.destroy({
      where: { idMetodo: req.params.id },
    });
    res.send({ id: 200, mensaje: "Metodo de pago eliminado" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

/**
 * Lista todos los métodos de pago.
 *
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {void}
 */
const ListarTOdosMetodos = async (req, res) => {
  try {
    // Obtiene todos los métodos de pago
    const Metodos = await MetodoP.findAll();
    res.send({ id: 200, mensaje: Metodos });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

/**
 * Obtiene información detallada de un método de pago por su identificador.
 *
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {void}
 */
const ListarUnMetodoP = async (req, res) => {
  try {
    // Obtiene información detallada de un método de pago por su identificador
    const Metodos = await MetodoP.findOne({
      where: { idMetodo: req.params.id },
    });
    res.send({ id: 200, mensaje: Metodos });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

module.exports = {
  AgregarMetodPago,
  EditarMetodoPago,
  EliminarMetodoPago,
  ListarTOdosMetodos,
  ListarUnMetodoP,
};
