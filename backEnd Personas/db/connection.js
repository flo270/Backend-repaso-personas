const mongoose = require('mongoose')
 require('dotenv/config')

 const connectionDB = async()=>{
    try {
       await mongoose.connect(process.env.DB_URL_CONECTOIN)
       console.log('conectado a la DB!!! Que bueno')  
    } catch (error) {
        console.log('Algo paso aqui', error)
    }
}


 connectionDB()