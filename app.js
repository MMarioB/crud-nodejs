// Llamamos a express y declaramos una variable
const { json } = require('express');
const express = require('express');
const app = express();

// Motor de plantillas
app.set('view engine', 'ejs');

// Capturar los datos
app.use(express.urlencoded({extended:false}));
app.use(express(json));

// Ruta principal
app.use('/', require('./router'));

// Servidor
app.listen(5000, () =>{
    console.log('SERVER corriendo en http://localhost:5000');
});

