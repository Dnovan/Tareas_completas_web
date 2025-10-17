const { check } = require('express-validator');
const { User } = require('../models/UserModel');
const { Profile } = require('../models/profile.model.js');

const validatorUserCreate = [
    check('nombre').notEmpty().withMessage('El campo nombre es obligatorio')
        .isString().withMessage('El campo nombre debe ser texto')
        .isLength({ min: 2, max: 100 }).withMessage('El campo debe tener entre 2 y 100 caracteres'),

    check('apellidos').notEmpty().withMessage('El campo apellido es obligatorio')
        .isString().withMessage('El campo apellido debe ser texto')
        .isLength({ min: 2, max: 100 }).withMessage('El campo debe tener entre 2 y 100 caracteres'),

    check('nick').notEmpty().withMessage('El campo nick es obligatorio')
        .isString().withMessage('El campo nick debe ser texto')
        .isLength({ min: 2, max: 20 }).withMessage('El campo debe tener entre 2 y 20 caracteres')
        .custom((value) => {
            return User.findOne({ where: { nick: value } }).then(user => {
                if (user) { return Promise.reject('El nick ya está en uso'); }
            });
        }),
    
    // El campo correo fue agregado ya que lo tienes en tus validaciones, asegúrate que existe en tu modelo UserModel
    check('correo').optional()
        .isEmail().withMessage('Debe ser un correo valido')
        .custom((value) => {
            return User.findOne({ where: { correo: value } }).then(user => {
                if (user) { return Promise.reject('El correo ya está en uso'); }
            });
        }),

    check('password').notEmpty().withMessage('El campo password es obligatorio') // 'contraseña' cambiado a 'password' que es más común y lo tenías en tu modelo
        .isString().withMessage('El campo password debe ser texto')
        .isLength({ min: 8 }).withMessage('El campo debe tener minimo 8 caracteres'),

    check('id_profile').notEmpty().withMessage('El campo id_profile es obligatorio') // 'perfil_id' cambiado a 'id_profile' como en tu modelo
        .isInt().withMessage('El campo id_profile debe ser numero')
        .custom((value) => {
            return Profile.findByPk(value).then(profile => {
                if (!profile) { return Promise.reject('No existe un perfil con ese id'); }
            });
        }),
];

const validatorUserUpdate = [
    check('nombre').optional()
        .isString().withMessage('El campo nombre debe ser texto')
        .isLength({ min: 2, max: 100 }).withMessage('El campo debe tener entre 2 y 100 caracteres'),

    check('apellidos').optional()
        .isString().withMessage('El campo apellido debe ser texto')
        .isLength({ min: 2, max: 100 }).withMessage('El campo debe tener entre 2 y 100 caracteres'),

    check('nick').optional()
        .isString().withMessage('El campo nick debe ser texto')
        .isLength({ min: 2, max: 20 }).withMessage('El campo debe tener entre 2 y 20 caracteres'),

    check('password').optional()
        .isString().withMessage('El campo password debe ser texto')
        .isLength({ min: 8 }).withMessage('El campo debe tener minimo 8 caracteres'),

    check('id_profile').optional()
        .isInt().withMessage('El campo id_profile debe ser numero')
        .custom((value) => {
            return Profile.findByPk(value).then(profile => {
                if (!profile) { return Promise.reject('No existe un perfil con ese id'); }
            });
        }),
];

module.exports = {
    validatorUserCreate,
    validatorUserUpdate
};