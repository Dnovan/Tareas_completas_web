const { DataTypes } = require('sequelize');
const { connection } = require('../config.db.js');

const State = connection.define('state', {
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    abreviacion: {
        type: DataTypes.STRING(5),
        allowNull: false
    }
}, {
    tableName: 'states',
    timestamps: true
});

module.exports = {
    State
};