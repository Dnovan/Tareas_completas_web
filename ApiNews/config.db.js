const Sequelize = require('sequelize');

// new Sequelize('database', 'user', 'password', { host, dialect })
const connection = new Sequelize('db_news', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
});

connection.authenticate()
    .then(() => {
        console.log('Se ha establecido conexión con la base de datos');
    })
    .catch(err => {
        console.log('No se pudo establecer conexión con la base de datos:', err);
    });

module.exports = { connection };