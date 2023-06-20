
const mongoose = require('mongoose');
mongoose.set('strictQuery', true) //Linea de codigo soluciona bug de moongose 7
//mongoose.connect('mongodb://localhost:27017/crudmern') // conexion sistema local mongoDB
 mongoose.connect(process.env.URL_MONGOCONNECTION,{ useNewUrlParser: true,
  useUnifiedTopology: true,});



const objetobd= mongoose.connection

objetobd.on('connected',()=>{console.log('conexion correcta a MongoDB')})
objetobd.on('error',()=>{console.log('error en la conexion a MongoDB')})

module.exports= mongoose


require('dotenv').config()


