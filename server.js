const express = require('express')
const app = express()
require('dotenv').config()

//ruta y puerto protegido
const port = process.env.PORT||6000;

//Importacion de Conexion 
const archivoBD = require('./connection')


//importacion de rutas y modelo Usuario
const rutausuario = require('./rutas/usuario')
const rutaagenda = require('./rutas/agendadehorarios')

//importacion body parser npm instalacion previa
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario',rutausuario)
app.use('/api/horarios',rutaagenda)





//Configuracion basica del server
app.listen(port, "0.0.0.0",()=> {
  console.log(`El servidor esta corriento correctamente en puerto ${port}`);
}) 