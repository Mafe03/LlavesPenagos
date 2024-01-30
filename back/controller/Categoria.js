const { Categoria } = require("../models/Conexion");
/**
 * Agrega una nueva categoría.
 *
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {void}
 */

const AgregarCategoria = async (req, res) => {
  try {
    const Categorias = await Categoria.create(req.body);
    res.send({ id: 200, mensaje: "Categoria agregada correctamente" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

/**
 * Edita una categoría existente.
 *
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {void}
 */

const EditarCategoria = async (req, res) => {
  try {
    const Categorias = await Categoria.update(req.body, {
      where: { idCategoria: req.params.id },
    });
    res.send({ id: 200, mensaje: "Categoria editada correctamente" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};
/**
 * Elimina una categoría por su identificador.
 *
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {void}
 */

const EliminarCategoria = async (req, res) => {
  try {
    const Categorias = await Categoria.destroy({
      where: { idCategoria: req.params.id },
    });
    res.send({ id: 200, mensaje: "Categoria eliminada correctamente" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};
/**
 * Obtiene todas las categorías.
 *
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {void}
 */

const ListarTodasCategorias = async (req, res) => {
  try {
    const Categorias = await Categoria.findAll();
    res.send({ id: 200, mensaje: Categorias });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};
/**
 * Obtiene una categoría por su identificador.
 *
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {void}
 */

const ListarUnaCategoria = async (req, res) => {
  try {
    const Categorias = await Categoria.findOne({
      where: { idCategoria: req.params.id },
    });
    res.send({ id: 200, mensaje: Categorias });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

module.exports = {
  AgregarCategoria,
  EditarCategoria,
  EliminarCategoria,
  ListarTodasCategorias,
  ListarUnaCategoria,
};
