import express from "express";
import cors from "cors";

import bodyParser from "body-parser"
import connectDB from "./connect/db.js";
import kamproute from "./routes/kamproute.js"
import dotenv from "dotenv"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
const app = express()

dotenv.config()


connectDB();
app.use(cors());
app.use(express.json());

app.use(bodyParser.json())





app.use('/', kamproute)
app.use(notFound);
app.use(errorHandler);

app.listen(8001, );