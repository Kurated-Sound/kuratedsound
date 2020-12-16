import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limited: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL="mongodb+srv://vincengai:whatpassword@cluster0.qnlwo.mongodb.net/test"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
    .catch( (error) => console.log(error.message))

mongoose.set('useFindAndModify', false)