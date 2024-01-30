const { Empleado, sequelize } = require("../models/Conexion");
const { QueryTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
/**
 * Agrega un nuevo empleado.
 *
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {void}
 */

const AgregarEmpleado = async (req, res) => {
  try {
    let datos = req.body;
    let consulta = await Empleado.findOne({
      where: { idEmpleado: req.body.idEmpleado },
    });
    if (consulta == null) {
      let password = await bcrypt.hash(datos.pass, 10);
      const Empleados = await Empleado.create({
        ...req.body,
        pass: password,
      });
      res.send({
        id: 200,
        mensaje: "Empleado agregado con exito",
      });
    } else {
      res.send({ id: 400, mensaje: "Ya existe el empleado" });
    }
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};
/**
 * Edita la información de un empleado existente.
 *
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {void}
 */
const EditarEmpleado = async (req, res) => {
  try {
    let datos = req.body;
    // Hash de la nueva contraseña antes de actualizar
    let password = await bcrypt.hash(datos.pass, 10);
    const Empleados = await Empleado.update(
      { ...req.body, pass: password },
      {
        where: { idEmpleado: req.params.id },
      }
    );
    res.send({ id: 200, mensaje: "Usuario editado correctamente" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.messages });
  }
};
/**
 * Elimina un empleado por su identificador.
 *
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {void}
 */
const EliminarEmpleado = async (req, res) => {
  try {
    const Empleados = await Empleado.destroy({
      where: { idEmpleado: req.params.id },
    });
    res.send({ id: 200, mensaje: "Empleado eliminado exitosamente" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.messages });
  }
};
/**
 * Lista todos los empleados.
 *
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {void}
 */
const ListarTodosEmpleados = async (req, res) => {
  try {
    const Emple = await sequelize.query(
      "SELECT empleados.idEmpleado, empleados.nombre, empleados.apellido, empleados.telefono, empleados.direccion, empleados.email  FROM empleados",
      { type: QueryTypes.SELECT }
    );
    res.send({ id: 200, mensaje: Emple });
  } catch (error) {
    res.send({ id: 400, mensaje: error.messages });
  }
};

/**
 * Obtiene información detallada de un empleado por su identificador.
 *
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {void}
 */
const ListarUnEmpleado = async (req, res) => {
  try {
    const Emple = await sequelize.query(
      `SELECT empleados.idEmpleado, empleados.nombre, empleados.apellido, empleados.telefono, empleados.direccion, empleados.email  FROM empleados WHERE idEmpleado=${req.params.id}`,
      { type: QueryTypes.SELECT }
    );
    res.send({ id: 200, mensaje: Emple });
  } catch (error) {
    res.send({ id: 400, mensaje: error.messages });
  }
};
/**
 * Maneja la autenticación de un empleado y devuelve un token JWT.
 *
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {void}
 */
const Login = async (req, res) => {
  try {
    let data = req.body;

    if (!data.idEmpleado || !data.pass) {
      res.send({ id: 400, mensaje: "Correo/Contraseña incorrecta" });
    }

    let dataEmple = await sequelize.query(
      "SELECT * FROM empleados WHERE idEmpleado=" + data.idEmpleado,
      { type: QueryTypes.SELECT }
    );
    if (dataEmple[0] == null) {
      res.send({ id: 400, mensaje: "No existe el empleado" });
    } else {
      let password = bcrypt.compareSync(data.pass, dataEmple[0].pass);
      if (!password) {
        res.send({ id: 400, mensaje: "Contraseña incorrecta" });
      } else {
        const token = jwt.sign(
          {
            idUsuario: dataEmple[0].idEmpleado,
            nombre: dataEmple[0].nombre,
            email: dataEmple[0].email,
          },
          "Mafe&Angie",
          {
            expiresIn: "1d",
          }
        );
        return res.status(200).send({
          id: 200,
          mensaje: "Bienvenido",
          usuario: {
            idEmpleado: dataEmple[0].idEmpleado,
            nombre: dataEmple[0].nombre,
            email: dataEmple[0].email,
          },
          token: token,
        });
      }
    }
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

module.exports = {
  AgregarEmpleado,
  EditarEmpleado,
  EliminarEmpleado,
  ListarTodosEmpleados,
  ListarUnEmpleado,
  Login,
};
