const { Category } = require('../models/CategoryModel');
const { validationResult } = require('express-validator');

const get = (request, response) => {
    // Código de la función GET (sin cambios)
    const {nombre,descripcion,activo,useralta} = request.query;
    const filters = {};
    if (nombre) { filters.nombre = nombre; }
    if (descripcion) { filters.descripcion = descripcion; }
    if (activo) { filters.activo = activo; }
    if (useralta) { filters.useralta = useralta; }

    Category.findAll({ where: filters })
      .then(entities => { response.json(entities); })
      .catch(err => {
        console.log(err);
        response.status(500).send('Error consultando los datos');
      });
}

const getById = (request, response) => {
    // Código de la función GET BY ID (sin cambios)
    const id = request.params.id;
    Category.findByPk(id)
      .then(entitie => {
        if (entitie) {
          response.json(entitie);
        } else {
          response.status(404).send('Recurso no encontrado');
        }
      })
      .catch(err => {
        response.status(500).send('Error al consultar el dato');
      });
}

const create = (request, response) => {
    // BLOQUE DE VALIDACIÓN
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(422).json({ errors: errors.mapped() });
    }

    // Lógica para crear
    Category.create(request.body)
      .then(newEntitie => {
        response.status(201).json(newEntitie);
      })
      .catch(err => {
        response.status(500).send('Error al crear');
      });
}

const update = (request, response) => {
    // BLOQUE DE VALIDACIÓN
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(422).json({ errors: errors.mapped() });
    }
    
    // Lógica para actualizar
    const id = request.params.id;
    Category.update(request.body, { where: { id: id } })
      .then(numRowsUpdated => {
        response.status(200).send(`${numRowsUpdated[0]} registro actualizado`);
      })
      .catch(err => {
        response.status(500).send('Error al actualizar');
      });
}

const destroy = (request, response) => {
    // Código de la función DELETE (sin cambios)
    const id = request.params.id;
    Category.destroy({ where: { id: id } })
      .then(numRowsDeleted => {
        response.status(200).send(`${numRowsDeleted} registro eliminado`);
      })
      .catch(err => {
        response.status(500).send('Error al eliminar');
      });
}

module.exports = { get, getById, create, update, destroy };