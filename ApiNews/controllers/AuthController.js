// controllers/AuthController.js

const UserModel = require('../models/UserModel'); // <-- DE NUEVO, REVISA EL NOMBRE DE TU MODELO
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');


const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        const usuario = await UserModel.findOne({
            where: {
                correo: req.body.correo,
                contraseña: req.body.contraseña // NOTA: EN UN PROYECTO REAL, ESTO DEBERÍA ESTAR HASHEADO.
            }
        });

        if (usuario) {
            // Preparamos el payload (lo que irá dentro del token)
            const payload = {
                id: usuario.id,
                nombre: usuario.nombre,
                perfil_id: usuario.perfil_id
            };

            // Firmamos el token
            const token = jwt.sign(payload, 'mi_llave_secreta_super_chingona_y_larga', { expiresIn: '24h' });
            
            res.status(200).json({ message: "Login con éxito", token: token }); // Devolvemos el mensaje Y el token
        } else {
            res.status(401).json({ message: "Credenciales incorrectas o usuario no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el servidor al intentar hacer login');
    }
}


const register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    // A los usuarios registrados desde aquí se les asigna el perfil de "Contribuidor" (ID 2)
    const userData = {
        ...req.body,
        perfil_id: 2, 
        activo: 1
    };

    try {
        const newUser = await UserModel.create(userData);
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al registrar el usuario');
    }
}

module.exports = {
    login,
    register,
};