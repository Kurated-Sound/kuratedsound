//this middleware will run w/ our routes that will 
//run before the function being passed into the route
import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    // console.log req
    const token = req.header("x-auth-token")

    try {
        if (!token) {
            return res.status(401).json({ msg: "No authentication token, authorization denied"})   
        }
        const verifiedToken = jwt.verify(token, process.env.JWT_SECRET)

        if (!verifiedToken) {
            return res.status(401)
                .json({msg: "Token verification failed, authorization denied"})
        }

        req.user = verifiedToken.id;
        next();

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export default authMiddleware