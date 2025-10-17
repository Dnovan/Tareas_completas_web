const { DataTypes } = require('sequelize');
const { connection } = require('../config.db.js');

const New = connection.define('new', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cuerpo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'news',
    timestamps: true
});

module.exports = {
    New
};