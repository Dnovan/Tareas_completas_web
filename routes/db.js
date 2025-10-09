const mysql = require('mysql2');

// Configuración de conexión
const conexion = mysql.createConnection({
    host: 'localhost',       // Cambia si usas hosting remoto
    user: 'root',            // Usuario por defecto en XAMPP
    password: '',            // Vacío si no has puesto contraseña
    database: 'mi_basedatos' // Nombre de tu base de datos
});

// Conexión
conexion.connect(err => {
    if (err) {
        console.error('❌ Error al conectar a MySQL:', err.message);
        return;
    }
    console.log('✅ Conexión exitosa a MySQL');
});

module.exports = conexion;

conexion.connect(err => {
    if (err) {
        console.error('Error al conectar:', err.message);
        return;
    }
    console.log('Conectado a MySQL');
});
