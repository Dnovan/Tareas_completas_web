const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todos
router.get('/', (req, res) => {
    db.query('SELECT * FROM usuarios', (err, result) => {
        if (err) {
            console.error('Error DB en GET /usuarios:', err);
            return res.status(500).json({ error: 'Error al leer usuarios' });
        }
        res.json(result);
    });
});

// Crear usuario
router.post('/', (req, res) => {
    const nombre = req && req.body && req.body.nombre ? req.body.nombre : undefined;
    if (!nombre) {
        return res.status(400).json({ error: 'Falta el campo "nombre"' });
    }
    db.query('INSERT INTO usuarios (nombre) VALUES (?)', [nombre], (err, result) => {
        if (err) {
            console.error('Error DB en POST /usuarios:', err);
            return res.status(500).json({ error: 'Error al crear usuario' });
        }
        return res.json({ mensaje: 'Usuario agregado con éxito', id: result && result.insertId });
    });
});

module.exports = router;
