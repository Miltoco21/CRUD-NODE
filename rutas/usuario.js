
const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemausuario = new eschema({
  nombre:String,
  email:String,
  telefono:String,
  instagram:String,
  idusuario:String
})

const ModeloUsuario = mongoose.model('usuarios',eschemausuario)

module.exports = router 


//Ruta y logica de AGREGAR(post) usuarios
router.post('/agregarusuario', (req,res)=>{
  const nuevousuario =  new ModeloUsuario({
    nombre:req.body.nombre,
    email:req.body.email,
    telefono:req.body.telefono,
    instagram:req.body.instagram,
    idusuario:req.body.idusuario
  })
  nuevousuario.save(function(err){
    if(!err){
      res.send('usuario agregado correctamente')
    }else{
      res.send(err)
    }
  })
})


//Ruta y logica de OBTENER (get)usuarios
router.get('/obtenerusuarios', (req,res)=>{
  ModeloUsuario.find({},function(docs,err){
    if(!err){
      res.send(docs)
    }else{
      res.send(err)
    }
  })
})
//obtener usuario por ID para editar
router.post('/obtenerdatausuario',(req,res)=>{
  ModeloUsuario.find({idusuario:req.body.idusuario},function(docs,err){
    if(!err){
      res.send(docs)
    }else{
      res.send(err)
    }
  })
})
 
//ruta para agregar datos de usuario editados
router.post('/actualizausuario', (req,res)=>{
  ModeloUsuario.findOneAndUpdate({idusuario:req.body.idusuario},{
    nombre:req.body.nombre,
    email:req.body.email,
    instagram:req.body.instagram,
    telefono:req.body.telefono
  },(err)=> {
    if(!err){
      res.send('Usuario editado correctamente')
    }else{
      res.send(err)
    }

  })
  
  
})

//Borrar usuario
router.post('/borrarusuario', (req,res)=>{ 
  ModeloUsuario.findOneAndDelete({idusuario:req.body.idusuario},(err) =>{
   if(!err){
     res.send('Usuario borrado con exito')
   }else{
     res.send(err)
   }
  })
  
})