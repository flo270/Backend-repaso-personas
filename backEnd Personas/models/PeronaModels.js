const mongoose= require('mongoose')
const PersonaSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    fecha_nacimiento:{
        type: String
    },
   dni:{
        type: Number,
        required: true
    }
})

module.exports= mongoose.model('Persona',PersonaSchema)