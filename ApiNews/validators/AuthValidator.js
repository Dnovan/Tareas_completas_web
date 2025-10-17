const { check } = require('express-validator');

// AQUÍ ESTÁ LA PUTA CORRECCIÓN. Importamos el modelo directamente.
// Asumimos que tu archivo se llama UserModel.js y que exporta el modelo.
const User = require('../models/UserModel'); 


const validatorLogin = [
    check('correo').notEmpty().withMessage('El campo correo es requerido')
        .isEmail().withMessage('El campo correo debe ser un correo válido'),

    check('contraseña').notEmpty().withMessage('El campo contraseña es requerido')
];

const validatorRegister = [
    check('nombre').notEmpty().withMessage('El campo nombre es obligatorio')
        .isLength({ min: 2, max: 100 }).withMessage('El campo debe tener entre 2 y 100 caracteres'),

    check('apellidos').notEmpty().withMessage('El campo apellidos es obligatorio')
        .isLength({ min: 2, max: 100 }).withMessage('El campo debe tener entre 2 y 100 caracteres'),

    check('nick').notEmpty().withMessage('El campo nick es obligatorio')
        .isLength({ min: 2, max: 20 }).withMessage('El campo nick debe tener entre 2 y 20 caracteres'),

    check('correo').notEmpty().withMessage('El campo correo es obligatorio')
        .isEmail().withMessage('El campo correo debe ser un correo valido')
        .custom(async (value) => {
            // USAMOS LA VARIABLE 'User' QUE SÍ ES EL PUTO MODELO CORRECTO
            const user = await User.findOne({ where: { correo: value } });
            if (user) {
                throw new Error('Ya existe un usuario con este correo');
            }
        }),

    check('contraseña').notEmpty().withMessage('El campo contraseña es obligatorio')
        .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
];

module.exports = {
    validatorLogin,
    validatorRegister
};