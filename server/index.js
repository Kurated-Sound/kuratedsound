// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';

// import dotenv from 'dotenv';
// import userRouter from './routes/userRouter.js'

// dotenv.config();

// const app = express(); // creates a new express app

// //middlewhere runs when you want to interact with routes of express
// app.use(express.json()); 
// app.use(cors());

// // app.use(bodyParser.json({ limit: "30mb", extended: true}));
// // app.use(bodyParser.urlencoded({ limited: "30mb", extended: true}));


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`server running on port: ${PORT}`))

// mongoose.connect(process.env.MONGODB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true},
//     (err) => { if (err) throw err;
//     console.log("MongoDB connection established")
// })
   
// mongoose.set('useFindAndModify', false)


// // Express Middleware
// //localhost 5000/users will use this route
// app.use("/api/users", userRouter);


import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import userRouter from "./routes/userRouter.js";

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use("/users", userRouter);

const CONNECTION_URL = "mongodb+srv://vincengai:whatpassword@cluster0.qnlwo.mongodb.net/test?retryWrites=true&w=majority"
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);