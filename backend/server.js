import express from "express"
import cors from "cors"
import users from "./data/users.js"
import colors from "colors"
import dotenv from "dotenv"
import path from "path"
import morgan from "morgan"
import prijavaroute from "./routes/prijavaroute.js"
import korisnickeroute from "./routes/korisnickeroute.js"
import novostroute from "./routes/novostroute.js"
import uploadRoutes from "./routes/uploadRoutes.js"
import arhiviraniKampRoute from "./routes/arhiviraniKampRoute.js"
import { notFound,errorHandler } from "./middleware/errorMiddleware.js"
import kamproute from "./routes/kamproute.js"
import connectDB from "./connect/db.js"
import bodyParser from "body-parser"
const app=express()

dotenv.config()



connectDB()
app.use(cors())
if(process.env.NODE_ENV==='development')
{
    app.use(morgan('dev'))
}

app.use(express.json())


app.use(bodyParser.json())





app.use('/api/kampovi',kamproute)
app.use('/api/arhivirani',arhiviraniKampRoute)

app.use('/api/prijave',prijavaroute)

app.use('/api/korisnici',korisnickeroute)
app.use('/api/novosti',novostroute)
app.use('/api/upload',uploadRoutes)


const __dirname=path.resolve()
app.use('/uploads',express.static(path.join(__dirname,'/uploads')))

if(process.env.NODE_ENV='production')
{
    app.use(express.static(path.join(__dirname,'/frontend/build')))
    app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'frontend','build','index.html')))
}
else{
    app.get('/',(req,res)=>{

        res.send('API is running!...')
    })

}


app.use(notFound)


app.use(errorHandler)




const PORT=process.env.PORT 
const mode=process.env.NODE_ENV
app.listen(5001,console.log(`Server radi u  ${mode} modu na portu: ${PORT} `.yellow.bold))


