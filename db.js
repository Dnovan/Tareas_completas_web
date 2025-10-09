// Stub de base de datos en memoria para desarrollo local / pruebas
// Exporta una función `query(sql, params, callback)` con la misma firma
// que muchos clientes MySQL para que el código existente pueda ejecutarse sin una DB real.
const db = {
  _users: [],
  query(sql, params, callback) {
    // Ejecutar de forma asíncrona para imitar comportamiento real
    setImmediate(() => {
      try {
        if (/^\s*select/i.test(sql)) {
          // Devolver copia para evitar mutaciones externas
          return callback(null, db._users.slice());
        }

        if (/^\s*insert/i.test(sql)) {
          const name = Array.isArray(params) ? params[0] : undefined;
          if (!name) return callback(new Error('Nombre no proporcionado'));
          const id = db._users.length + 1;
          const row = { id, nombre: name };
          db._users.push(row);
          // Simular resultado típico de un driver: insertId, affectedRows
          return callback(null, { insertId: id, affectedRows: 1 });
        }

        return callback(new Error('Query no soportada por el stub: ' + sql));
      } catch (err) {
        return callback(err);
      }
    });
  }
};

module.exports = db;
