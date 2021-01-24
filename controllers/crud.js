const conexion = require('../database/db');

// Ponemos save porque asi se llama nuestro metodo guardar
exports.save = (req, res) => {
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos;
    const telefono = req.body.telefono;
    const edad = req.body.edad;

    // Consulta
    conexion.query('INSERT INTO contacto SET ?', {nombre:nombre, apellidos:apellidos,
        telefono:telefono, edad:edad}, (error, results) => {
            if(error){
                console.log(error);
            } else {
                res.redirect('/');
            }
    });
};

// Ponemos update porque asi se llama nuestro metodo actualizar
exports.update = (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos;
    const telefono = req.body.telefono;
    const edad = req.body.edad;
    conexion.query('UPDATE contacto SET ? WHERE id= ?', [{nombre:nombre, apellidos:apellidos,
        telefono:telefono, edad:edad}, id], (error, results) => {
            if(error){
                console.log(error);
            } else {
                res.redirect('/');
            }
    });
}