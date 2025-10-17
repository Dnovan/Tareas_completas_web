const { DataTypes } = require('sequelize');
const { connection } = require('../config.db.js');

const Profile = connection.define('profile', {
    // No es necesario definir 'id', Sequelize lo maneja por defecto.
    
    // Definimos la columna 'nombre'
    nombre: {
        type: DataTypes.STRING(50), // Esto es un VARCHAR(50)
        allowNull: false            // Esto significa que no puede estar vacío (NOT NULL)
    }

    // Sequelize también manejará las columnas 'createdAt' y 'updatedAt' automáticamente.

}, {
    // Opciones adicionales

    // Esta línea es CRÍTICA: le dice a Sequelize el nombre exacto de la tabla en la base de datos.
    tableName: 'profiles',

    // Habilita los campos de tiempo automáticos (createdAt y updatedAt)
    timestamps: true 
});

// Exportamos el modelo para que el controlador pueda usarlo.
module.exports = Profile;