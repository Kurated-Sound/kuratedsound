import User from '../models/userModel.js'
import Bcrypt from 'bcryptjs'
import Jwt from 'jsonwebtoken';

export const validateToken = async (req, res) => {

    const token = req.header("x-auth-token")
    if (!token) return res.json(false)

    const verifiedToken = Jwt.verify(token, process.env.JWT_SECRET)
    if (!verifiedToken) return res.json(false)

    const user = await User.findById(verifiedToken.id);
    if (!user) return res.json(false)

    return res.json(true)
}


export const deleteUser = async (req, res) => {

    try {
        const deletedUser = await User.findByIdAndDelete(req.user)
        res.json(deletedUser)
    } catch (error) {
        
    }
}

export const loginUser = async (req, res) => {

    try {
        const {email, password} = req.body

        const user = await User.findOne({ email: email })
        const foundEmail = await User.findOne({email: email})

        if (!email || !password) {
            return res.status(400).json({msg: "Not all fields have been entered"})
        } 

        if (!foundEmail) {
            return res.status(400).json({msg: "Incorrect Email"})
        }

        // BCrypt.compare takes in the inputted Password && Compares it to the encrypted password
        const isMatch = await Bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({msg: "Invalid Credentials"})
        }
   
        // JWT token looks for ID of the user._id and JWT password
        // Password is to verify it's not a duplicate web token
        const token = Jwt.sign( { id: user._id }, process.env.JWT_SECRET )

        res.json({
            token,
            user: {
                id: user._id,
                displayName: user.displayName,
                email: user.email
            }
        })

    } catch (error) {
        return res
            .status(500)
            .json({error: error.message})
    }
}

export const createUser =  async (req, res) => {
    try {
        let { email, password, passwordCheck, displayName } = req.body

        if ( !email || !password || !passwordCheck ) {
            return res.status(400).json({msg: "Not all fields have been entered"})
        }

        if ( password.length < 5 ) {
            return res
                .status(400)
                .json({msg: "Password needs to be at least 5 characters long"})
        }

        if (password !== passwordCheck) {
            return res
                .status(400)
                .json({msg: "Password do not match"})
        }

        const existingUser = await User.findOne({email: email})

        if (existingUser) {
            return res
                .status(400)
                .json({msg: "An account with this email already exists."})
        } 

        if (!displayName) displayName = email;

        const salt = await Bcrypt.genSalt();
        // Bcrypt.hash requires the string to encrypt, and the salt
        const passwordHash = await Bcrypt.hash(password, salt)
        
        const newUser = new User({
            email: email,
            password: passwordHash,
            displayName: displayName
        });

        const savedUser = await newUser.save();
        res.json(savedUser);

    } catch (err) {
        res.status(500).json({error: err.message})
    }
}


