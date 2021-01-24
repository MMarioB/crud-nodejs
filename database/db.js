const mysql = require('mysql');

// Conexion
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'agenda_db'
});

// Comprobar conexion
conexion.connect((error) =>{
    if(error){
        console.error('El error de conexion es: ' + error);
        return
    }
    console.log('Conectado a la Base de Datos!');
});

// Exportamos el archivo para que pueda ser usado en la aplicacion
module.exports = conexion;