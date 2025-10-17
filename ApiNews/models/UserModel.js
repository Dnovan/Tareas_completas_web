const { DataTypes } = require('sequelize');
const { connection } = require('../config.db.js');

const User = connection.define('user', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nick: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    // FALTABA EL CAMPO 'correo' EN TU MODELO, PENDEJO.
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    // VEO QUE LE CAMBIASTE 'contraseña' A 'password'. LO ARREGLÉ.
    contraseña: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    // LE CAMBIASTE EL NOMBRE A ESTO TAMBIÉN.
    perfil_id: { 
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: true
});

// ¡¡¡AQUÍ ESTÁ LA PUTA SOLUCIÓN!!! EXPORTAMOS EL MODELO DIRECTAMENTE.
module.exports = User;