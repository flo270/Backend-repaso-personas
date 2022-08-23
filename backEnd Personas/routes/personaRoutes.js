const express = require('express')
const { obtenerPersona,agregarPersona } = require('../controller/PersonaController')
const route= express.Router()

route.get('/',obtenerPersona)
route.post('/',agregarPersona)

module.exports= route