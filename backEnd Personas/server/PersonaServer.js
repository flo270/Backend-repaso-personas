const express= require('express')
const appPersonas=express()
const cors = require('cors')
const morgan = require('morgan')
const PersonaRoute= require ('../routes/personaRoutes')

require('../db/connection')
require('dotenv').config();

const port= process.env.PORT

// midwares
appPersonas.use(express.json())
appPersonas.use(cors())
appPersonas.use(morgan('dev'))

appPersonas.use('/persona',PersonaRoute)

appPersonas.get('/',(req,res)=>{
    res.json('funciona servicio')
})

appPersonas.listen(port,()=>{
    console.log('estamos en el puerto', port)
})