const mongoose = require('mongoose');

const conexion= async()=>{

    try{
        await mongoose.connect("mongodb://localhost:27017/Base_Agronomo")
        console.log("conexion exitosa a la base de datos")
    }catch(error){
        console.log(error)
        throw new Error("No se ha podido iniciar la conexión")
    }
}

module.exports={
    conexion
}