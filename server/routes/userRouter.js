import express from 'express';

const router = express.Router();


// Whenever we make a HTTP.get request, you want to execute this call back function of (req, res)
// this is a /users/test route. should respond with console.log
router.get("/test", (req, res) => {
    res.send("Hello, it's working");
});


export default router