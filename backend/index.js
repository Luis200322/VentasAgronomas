const conexion = require('./database/conexion')
const express = require('express')
const cors= require('cors')


console.log("aplicación inicializada........!!")

conexion.conexion()

const app= express();
const puerto= 3000;

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended: true}));


//RUTAS
const rutas_articulo= require('./routes/ArticuloRutas')
//usar RUTAS
app.use("/api", rutas_articulo)

app.listen(puerto, () =>{
    console.log("Servidor corriendo en el puerto: " + puerto)
})
