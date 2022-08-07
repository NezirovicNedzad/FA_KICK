import express from "express";
import cors from "cors";

import bodyParser from "body-parser"
import connectDB from "./connect/db.js";




import colors from "colors"
import dotenv from "dotenv"

import novostroute from "./routes/novostroute.js"

import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
const app = express()

dotenv.config()


connectDB();
app.use(cors());
app.use(express.json());

app.use(bodyParser.json())





app.use('/', novostroute)
app.use(notFound);
app.use(errorHandler);

app.listen(8002, console.log("Service is running on 8002 port!"));