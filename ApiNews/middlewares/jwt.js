// middlewares/jwt.js

const jwt = require('jsonwebtoken');

// ESTE ES EL CADENERO MAMÓN: Solo deja pasar a los putos Admins.
const authenticateAdmin = (req, res, next) => {
    const authorization_header = req.headers.authorization;
    
    // Si ni siquiera traen el puto ticket, a la verga.
    if (!authorization_header) {
        return res.status(401).send({ message: 'No se proporcionó un puto token' });
    }
    
    const token = authorization_header.split(' ')[1];

    if (!token) {
        return res.status(401).send({ message: 'Token de mierda mal formado' });
    }
    
    // Verificamos el ticket con la llave secreta
    jwt.verify(token, 'mi_llave_secreta_super_chingona_y_larga', (err, decoded) => {
        // Si el puto ticket es falso o ya expiró, a la verga.
        if (err) {
            return res.status(403).send({ message: 'Token inválido o expirado. ¡Lárgate!' });
        }

        // OJO PENDEJO: Tu token tiene el payload en 'payload', no en 'usuario'. Lo arreglé.
        // Ahora revisamos si es un puto ADMIN (perfil_id === 1)
        if (decoded && decoded.perfil_id === 1) {
            req.user = decoded; // Guardamos al usuario por si lo necesitamos después
            next(); // ¡Adelante, puto jefe!
        } else {
            return res.status(403).send({ message: 'Acceso denegado. Se requiere rol de Administrador, pinche plebeyo.' });
        }
    });
}

// ESTE ES EL CADENERO BUENA ONDA: Deja pasar a CUALQUIER pendejo que traiga un ticket válido.
const authenticateAny = (req, res, next) => {
    const authorization_header = req.headers.authorization;

    if (!authorization_header) {
        return res.status(401).send({ message: 'No se proporcionó un puto token' });
    }
    
    const token = authorization_header.split(' ')[1];
    
    if (!token) {
        return res.status(401).send({ message: 'Token de mierda mal formado' });
    }

    jwt.verify(token, 'mi_llave_secreta_super_chingona_y_larga', (err, decoded) => {
        if (err) {
            return res.status(403).send({ message: 'Token inválido o expirado. ¡Lárgate!' });
        }
        
        // Si el ticket es válido, no me importa quién putas seas, ¡pásale!
        req.user = decoded;
        next();
    });
}

module.exports = {
    authenticateAdmin,
    authenticateAny
};