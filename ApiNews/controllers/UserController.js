const { User } = require('../models/UserModel');
const { Profile } = require('../models/profile.model.js');
const { validationResult } = require('express-validator');

const relations = [
    { model: Profile, attributes: ['id', 'nombre'], as: 'perfil' }
];

const get = (request, response) => {
    // GET (sin cambios)
    const { nombre, apellidos, nick } = request.query;
    const filters = {};
    if (nombre) { filters.nombre = nombre; }
    if (apellidos) { filters.apellidos = apellidos; }
    if (nick) { filters.nick = nick; }

    User.findAll({ where: filters, include: relations })
        .then(entities => { response.json(entities); })
        .catch(err => {
            console.log(err);
            response.status(500).send('Error consultando los datos');
        });
};

const getById = (request, response) => {
    // GET BY ID (sin cambios)
    const id = request.params.id;
    User.findByPk(id, { include: relations })
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
};

const create = (request, response) => {
    // BLOQUE DE VALIDACIÓN
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(422).json({ errors: errors.mapped() });
    }

    User.create(request.body)
        .then(newEntitie => {
            response.status(201).json(newEntitie);
        })
        .catch(err => {
            response.status(500).send('Error al crear');
        });
};

const update = (request, response) => {
    // BLOQUE DE VALIDACIÓN
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(422).json({ errors: errors.mapped() });
    }

    const id = request.params.id;
    User.update(request.body, { where: { id: id } })
        .then(numRowsUpdated => {
            response.status(200).send(`${numRowsUpdated[0]} registro actualizado`);
        })
        .catch(err => {
            response.status(500).send('Error al actualizar');
        });
};

const destroy = (request, response) => {
    // DELETE (sin cambios)
    const id = request.params.id;
    User.destroy({ where: { id: id } })
        .then(numRowsDeleted => {
            response.status(200).send(`${numRowsDeleted} registro eliminado`);
        })
        .catch(err => {
            response.status(500).send('Error al eliminar');
        });
};

module.exports = { get, getById, create, update, destroy };