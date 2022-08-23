const PersonaModel = require('../models/PeronaModels')

const obtenerPersona = async (req,res)=>{
    const getAll = await PersonaModel.find({})
    res.json(getAll)
}
const agregarPersona = async (req,res)=>{
    const { nombre,apellido,fecha_nacimiento,dni}= req.body
    try {
       const personaNueva=new PersonaModel({
        nombre: nombre,
        apellido:apellido,
        fecha_nacimiento:fecha_nacimiento,
        dni:dni
       }) 
       const newPersona = await personaNueva.save()
       console.log(newPersona)
       res.status(201).json({msg:"exito se guardo persona nueva", persona: newPersona})
    } catch (error) {
        res.status(404).json({msg:"lo siento algo salio mal",error})
        
    }
}
module.exports={obtenerPersona,agregarPersona}