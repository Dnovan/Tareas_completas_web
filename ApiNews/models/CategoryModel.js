const { DataTypes } = require('sequelize');
const { connection } = require('../config.db.js');

const Category = connection.define('category', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    useralta: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'categories',
    timestamps: true
});

module.exports = {
    Category
};