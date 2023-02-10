const express = require('express')
const app = express()
require('dotenv').config()

//ruta y puerto protegido
const port = 6000;

//Importacion de Conexion 
const archivoBD = require('./connection')

//importacion de rutas y modelo Usuario
const rutausuario = require('./rutas/usuario')

//importacion body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario',rutausuario)



app.get('/', (req, res) => {
  res.send('hello Miltocoooo')
})



//Configuracion basica del server
app.listen(port, ()=> {
  console.log(`El servidor esta corriento correctamente en puerto ${port}`);
}) 