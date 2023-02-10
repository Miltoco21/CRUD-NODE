
const mongoose = require('mongoose');
mongoose.set('strictQuery', true) //Linea de codigo soluciona bug de moongose 7
mongoose.connect('mongodb://localhost:27017/crudmern') 

const objetobd= mongoose.connection

objetobd.on('connected',()=>{console.log('conexion correcta a MongoDB')})
objetobd.on('error',()=>{console.log('error en la conexion a MongoDB')})

module.exports= mongoose

// .then(()=>{
//   console.log('Conexion A la BD existosa ------>');
// })
// .catch((err)=>{
// console.log('Error de Conexion',err)
// })

require('dotenv').config()


