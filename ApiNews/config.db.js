const Sequelize = require('sequelize');
require('dotenv').config();


const { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, DB_PORT } = require('./config.js');

const connection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
    port: DB_PORT 
});


connection.authenticate()
    .then(() => {
        console.log('Se ha establecido conexión con la base de datos exitosamente.');
    })
    .catch(err => {
        console.error('Error: No se pudo establecer conexión con la base de datos.');
        console.error('Detalles del error:', err.name, err.message);
    });

module.exports = { connection };