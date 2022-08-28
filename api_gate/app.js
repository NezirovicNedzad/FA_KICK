import express from "express";
import cors from "cors";
import proxy from "express-http-proxy"

import colors from "colors"
import dotenv from "dotenv"
import path from "path"
import morgan from "morgan"
import prijavaroute from "./routes/prijavaroute.js"
import korisnickeroute from "./routes/korisnickeroute.js"
import novostroute from  "./routes/novostroute.js"
import uploadRoutes from "./routes/uploadRoutes.js"
import arhiviraniKampRoute from "./routes/arhiviraniKampRoute.js"
import { notFound,errorHandler } from "./middleware/errorMiddleware.js"

import connectDB from "./connect/db.js"
import bodyParser from "body-parser"

const app=express();
dotenv.config()


connectDB();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())

app.get('/',(req,res)=>{

    res.send('API is running!...')
})


app.use('/api/kampovi',proxy('http://localhost:8001'));

app.use('/api/arhivirani',arhiviraniKampRoute)

app.use('/api/prijave',prijavaroute)

app.use('/api/korisnici',korisnickeroute)
app.use('/api/novosti',novostroute)
app.use('/api/upload',uploadRoutes)


const __dirname=path.resolve()
app.use('/uploads',express.static(path.join(__dirname,'/uploads')))




app.use(notFound)


app.use(errorHandler)







app.listen(8000,console.log("Gateway je spreman i ceka zahteve na portu 8000!"));