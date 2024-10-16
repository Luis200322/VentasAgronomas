const validator = require('validator');
const Articulo = require('../models/Articulo');

// Función para crear un artículo en la base de datos
const crear = async (req, res) => {
    let parametros = req.body;

    // COMPROBACIÓN/VALIDACIONES
    if (!parametros || !parametros.titulo || !parametros.descripcion) {
        return res.status(400).json({
            status: 'error',
            mensaje: 'Faltan datos.'
        });
    }

    try {
        let validar_titulo = !validator.isEmpty(parametros.titulo);
        let validar_descripcion = !validator.isEmpty(parametros.descripcion);

        if (!validar_titulo || !validar_descripcion) {
            throw new Error("La validación de los datos ha fallado.");
        }
    } catch (error) {
        return res.status(400).json({
            status: 'error',
            mensaje: 'Error al crear el artículo.',
            error: error.message
        });
    }

    try {
        const articulo = new Articulo(parametros);
        const articuloGuardado = await articulo.save();
        return res.status(200).json({
            status: 'success',
            mensaje: 'Artículo creado correctamente.',
            articulo: articuloGuardado
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            mensaje: 'No se ha podido guardar el artículo.',
            error: error.message
        });
    }
};

// Función para listar los artículos
const listar = async (req, res) => {
    try {
        const articulos = await Articulo.find().sort({ fecha: -1 });
        return res.status(200).json({
            status: 'success',
            articulos
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            mensaje: 'Error al obtener los artículos.',
            error: error.message
        });
    }
};

// Función para actualizar un artículo por ID
const actualizar = async (req, res) => {
    const articuloId = req.params.id;
    const parametros = req.body;

    // COMPROBACIÓN/VALIDACIONES
    if (!parametros || !parametros.titulo || !parametros.descripcion) {
        return res.status(400).json({
            status: 'error',
            mensaje: 'Faltan datos.'
        });
    }

    try {
        let validar_titulo = !validator.isEmpty(parametros.titulo);
        let validar_descripcion = !validator.isEmpty(parametros.descripcion);

        if (!validar_titulo || !validar_descripcion) {
            throw new Error("La validación de los datos ha fallado.");
        }
    } catch (error) {
        return res.status(400).json({
            status: 'error',
            mensaje: 'Error al actualizar el artículo.',
            error: error.message
        });
    }

    try {
        const articuloActualizado = await Articulo.findByIdAndUpdate(articuloId, parametros, { new: true });
        return res.status(200).json({
            status: 'success',
            mensaje: 'Artículo actualizado correctamente.',
            articulo: articuloActualizado
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            mensaje: 'No se ha podido actualizar el artículo.',
            error: error.message
        });
    }
};

// Función para eliminar un artículo por ID
const eliminar = async (req, res) => {
    const articuloId = req.params.id;

    try {
        await Articulo.findByIdAndDelete(articuloId);
        return res.status(200).json({
            status: 'success',
            mensaje: 'Artículo eliminado correctamente.'
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            mensaje: 'No se ha podido eliminar el artículo.',
            error: error.message
        });
    }
};

module.exports = {
    crear,
    listar,
    actualizar,
    eliminar
};
