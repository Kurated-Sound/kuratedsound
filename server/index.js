import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
// import bodyParser from 'body-parser';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
require('dotenv').config()

const app = express(); // creates a new express app

//middlewhere runs when you want to interact with routes of express
app.use(express.json());
app.use(cors());

// app.use(bodyParser.json({ limit: "30mb", extended: true}));
// app.use(bodyParser.urlencoded({ limited: "30mb", extended: true}));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port: ${PORT}`))

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true},
    (err) => { if (err) throw err;
    console.log("MongoDB connection established")
})
   

mongoose.set('useFindAndModify', false)