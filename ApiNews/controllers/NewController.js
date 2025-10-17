const { New } = require('../models/NewModel');
const { Category } = require('../models/CategoryModel');
const { State } = require('../models/StateModel');
const { User } = require('../models/UserModel');
const { Profile } = require('../models/profile.model.js');
const { validationResult } = require('express-validator');

const relationsUser = [
    { model: Profile, attributes: ['id', 'nombre'], as: 'perfil' }
];

const relations = [
    { model: Category, attributes: ['id', 'nombre', 'descripcion'], as: 'categoria' },
    { model: State, attributes: ['id', 'nombre', 'abreviacion'], as: 'estado' },
    { model: User, attributes: ['id', 'nick', 'nombre'], as: 'usuario', include: relationsUser } // Quitado 'perfil_id' que ya viene en 'usuario'
];

const get = (request, response) => {
    // GET (sin cambios)
    const { titulo, activo } = request.query;
    const filters = {};
    if (titulo) { filters.titulo = titulo; }
    if (activo) { filters.activo = activo; }

    New.findAll({ where: filters, include: relations })
        .then(entities => { response.json(entities); })
        .catch(err => {
            console.log(err);
            response.status(500).send('Error consultando los datos');
        });
};

const getById = (request, response) => {
    // GET BY ID (sin cambios)
    const id = request.params.id;
    New.findByPk(id, { include: relations })
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

    New.create(request.body)
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
    New.update(request.body, { where: { id: id } })
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
    New.destroy({ where: { id: id } })
        .then(numRowsDeleted => {
            response.status(200).send(`${numRowsDeleted} registro eliminado`);
        })
        .catch(err => {
            response.status(500).send('Error al eliminar');
        });
};

module.exports = { get, getById, create, update, destroy };