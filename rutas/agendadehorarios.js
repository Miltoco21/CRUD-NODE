const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemaagenda = new eschema({
  fecha:Date,
  horario:String,
 
})

const ModeloAgenda = mongoose.model('horarios',eschemaagenda)

module.exports = router

router.post('/horarios', async (req, res) => {
  try {
    const { fecha, horario } = req.body;

    // Check the availability of the appointment
    const isAvailable = await isAppointmentAvailable(fecha, horario);

    if (isAvailable) {
      // Create a new appointment
      const nuevaagenda = new ModeloAgenda({
        fecha: fecha,
        horario: horario
      });

      // Save the appointment to the database
      await nuevaagenda.save();

      res.status(201).json({
        nuevaagenda,
        available: true,
        message:'201'
      });
    } else {
      res.status(200).json({
        available: false,
        message:'200'
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while saving the appointment.' });
  }
});

// Function to check the availability of the appointment
async function isAppointmentAvailable(fecha, horario) {
  // Logic to check the availability of the appointment
  // This could involve querying the database or checking against some schedule data

  // Example logic: Check if the appointment exists with the provided date and time
  const existingAppointment = await ModeloAgenda.findOne({ fecha: fecha, horario: horario });

  // If an existing appointment is found, it means the slot is not available
  if (existingAppointment) {
    return false;
  }

  // If no existing appointment is found, the slot is available
  return true;
}




// const nuevaagenda =  new ModeloAgenda({
  //   fecha:req.body.fecha,
  //   horario:req.body.horario
    
  // })
  
  
  //  nuevaagenda.save(function(err){
  //   if(!err){
  //     res.send('horario agregado correctamente')
  //   }else{
  //     res.send(err)
  //   }
  // })