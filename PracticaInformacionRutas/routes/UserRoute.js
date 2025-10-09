const express = require('express');
const api = express.Router();

// Array de usuarios simulando una base de datos
let usuarios = [
  { id: 1, nombre: "Math Jhon", edad: 25 },
  { id: 2, nombre: "Ana López", edad: 30 },
  { id: 3, nombre: "Carlos Ruiz", edad: 22 },
  { id: 4, nombre: "Laura García", edad: 27 },
  { id: 5, nombre: "Miguel Torres", edad: 29 },
];

// Obtener todos los usuarios (con filtrado opcional por nombre o edad)
api.get('/usuarios', (req, res) => {
  const { nombre, edad } = req.query;
  let resultado = usuarios;

  if (nombre) {
    resultado = resultado.filter(u =>
      u.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
  }

  if (edad) {
    resultado = resultado.filter(u => u.edad == edad);
  }

  res.json(resultado);
});

// Obtener usuario por id
api.get('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === id);

  if (usuario) res.json(usuario);
  else res.status(404).json({ mensaje: "Usuario no encontrado" });
});

// Agregar un nuevo usuario
api.post('/usuarios', (req, res) => {
  const nuevoUsuario = req.body;

  if (!nuevoUsuario.nombre || !nuevoUsuario.edad) {
    return res.status(400).json({ mensaje: "Faltan datos (nombre o edad)" });
  }

  nuevoUsuario.id = usuarios.length + 1;
  usuarios.push(nuevoUsuario);

  res.status(201).json({ mensaje: "Usuario agregado", usuario: nuevoUsuario });
});

// Eliminar usuario por id
api.delete('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = usuarios.findIndex(u => u.id === id);

  if (index !== -1) {
    const eliminado = usuarios.splice(index, 1);
    res.json({ mensaje: "Usuario eliminado", eliminado });
  } else {
    res.status(404).json({ mensaje: "Usuario no encontrado" });
  }
});

module.exports = api;
