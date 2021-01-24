const express = require('express');

const router = express.Router();
const conexion = require('./database/db');

//MOSTRAR todos los registros
router.get('/', (req,res) => {
    conexion.query('SELECT * FROM contacto', (error, results)=>{
        if(error){
            throw error;
        } else {
            // Vista index
            res.render('index.ejs', {results:results});
        }
    }); 
});

// CREAR registros
router.get('/create', (req,res)=>{
    res.render('create.ejs');
});

// EDITAR registros
router.get('/edit/:id', (req,res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM contacto WHERE id=?', [id], (error,results) =>{
        if(error){
            throw error;
        } else {
            res.render('edit.ejs', {contacto:results[0]});
        }
    });
});

// ELIMINAR registros
router.get('/delete/:id', (req,res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM contacto WHERE id = ?', [id],(error,results) =>{
        if(error){
            throw error;
        } else {
            res.redirect('/');
        }
    });
});

// Rutas CRUD
const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;