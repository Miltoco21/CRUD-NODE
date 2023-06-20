
const mongoose = require('mongoose');
mongoose.set('strictQuery', true) //Linea de codigo soluciona bug de moongose 7
//mongoose.connect('mongodb://localhost:27017/crudmern') // conexion sistema local mongoDB
const URL_MONGOCONNECTION = mongoose.connect(process.env.URL_MONGOCONNECTION)



const objetobd= mongoose.connection

objetobd.on('connected',()=>{console.log('conexion correcta a MongoDB')})
objetobd.on('error',()=>{console.log('error en la conexion a MongoDB')})

module.exports= {mongoose,URL_MONGOCONNECTION}


require('dotenv').config()


