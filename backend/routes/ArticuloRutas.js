const express = require('express');
const router = express.Router();
const ArticuloControlador = require('../controllers/ArticuloControlador');

// Ruta que maneja todas las operaciones CRUD
router.route('/articulo')
    .get(ArticuloControlador.listar)    // Obtener todos los artículos
    .post(ArticuloControlador.crear);   // Crear un nuevo artículo

router.route('/articulo/:id')
    .put(ArticuloControlador.actualizar)  // Actualizar un artículo por ID
    .delete(ArticuloControlador.eliminar); // Eliminar un artículo por ID

module.exports = router;
