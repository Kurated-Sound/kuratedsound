// middleware will run w/ our routes and will 
//run BEFORE the following action afterwards
import jwt, { decode } from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    // console.log req
    const token = req.header.authorization.split(' ')[1];
    // if lenght is > 500 it's Google OAUTH
    const isCustomAuth = token.length < 500;

    try {
        let decodedData; 

        if (token && isCustomAuth) {
            decodedData = jwt.verify( token, process.env.JWT_SECRET)

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            // Sub is google's name for a specific ID classified to per user
            req.userId = decodedData?.sub;
        }

        
        next(); 
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export default authMiddleware