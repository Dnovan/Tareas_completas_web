// controllers/profile.controller.js

// Importamos el modelo que vamos a usar
const Profile = require('../models/profile.model.js');

// Obtener todos los perfiles (GET /)
const get = async (req, res) => {
    try {
        const profiles = await Profile.findAll();
        res.json(profiles);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al consultar los perfiles');
    }
}

// Obtener un perfil por su ID (GET /:id)
const getById = async (req, res) => {
    const id = req.params.id;
    try {
        const profile = await Profile.findByPk(id);
        if (profile) {
            res.json(profile);
        } else {
            res.status(404).send('Recurso no encontrado');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al consultar el perfil');
    }
}

// Crear un nuevo perfil (POST /)
const create = async (req, res) => {
    try {
        const newProfile = await Profile.create(req.body);
        res.status(201).json(newProfile);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear el perfil');
    }
}

// Actualizar un perfil (PUT /:id)
const update = async (req, res) => {
    const id = req.params.id;
    try {
        // 'update' devuelve un array con el número de filas afectadas
        const [numRowsUpdated] = await Profile.update(req.body, {
            where: { id: id }
        });

        if (numRowsUpdated === 1) {
            res.status(200).send('Perfil actualizado correctamente');
        } else {
            res.status(404).send('No se pudo actualizar el perfil o no se encontró');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el perfil');
    }
}

// Eliminar un perfil (DELETE /:id)
const destroy = async (req, res) => {
    const id = req.params.id;
    try {
        // 'destroy' devuelve el número de filas eliminadas
        const numRowsDeleted = await Profile.destroy({
            where: { id: id }
        });

        if (numRowsDeleted === 1) {
            res.status(200).send('Perfil eliminado correctamente');
        } else {
            res.status(404).send('No se pudo eliminar el perfil o no se encontró');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar el perfil');
    }
}

// Exportamos todas las funciones para que puedan ser usadas en las rutas
module.exports = {
    get,
    getById,
    create,
    update,
    destroy
};