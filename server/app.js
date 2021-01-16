import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'

dotenv.config();

const app = express(); // creates a new express app

//middlewhere runs when you want to interact with routes of express
app.use(express.json()); 
app.use(cors());

// app.use(bodyParser.json({ limit: "30mb", extended: true}));
// app.use(bodyParser.urlencoded({ limited: "30mb", extended: true}));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port: ${PORT}`))

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true},
    (err) => { if (err) throw err;
    console.log("MongoDB connection established")
})
   
mongoose.set('useFindAndModify', false)


// Express Middleware
//localhost 5000/users will use this route
app.use("/user", userRoutes);