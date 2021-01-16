import User from '../models/userSchema.js'
import Bcrypt from 'bcryptjs'
import Jwt from 'jsonwebtoken';


export const deleteUser = async (req, res) => {

    try {
        const deletedUser = await User.findByIdAndDelete(req.user)
        res.json(deletedUser)
    } catch (error) {
        
    }
}

export const signin = async (req, res) => {

    try {
        const {email, password} = req.body

        const existingUser = await User.findOne({ email: email })
        const isPasswordCorrect = await Bcrypt.compare(password, existingUser.password)

        if (!email || !password) {
            return res.status(400).json({msg: "Not all fields have been entered"})
        } 

        if (!existingUser) {
            return res.status(400).json({msg: "User doesn't exist"})
        }

        if (!isPasswordCorrect) {
            return res.status(400).json({msg: "Invalid Credentials"})
        }
   
        // JWT token looks for ID of the user._id and JWT password
        // Password is to verify it's not a duplicate web token
        const token = Jwt.sign( { email: existingUser.email, id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '1h'} )

        res.status(200).json({ result: existingUser, token })
  
    } catch (error) {
        return res
            .status(500)
            .json({error: error.message})
    }
}

export const signup =  async (req, res) => {

    try {
        let { email, password, passwordCheck, firstName, lastName } = req.body

        if (!existingUser) return res.status(400).json({ msg: "User already exists"})

        if (password !== passwordCheck) {
            return res
                .status(400)
                .json({msg: "Passwords do not match"})
        }

        if ( password.length < 5 ) {
            return res
                .status(400)
                .json({msg: "Password needs to be at least 5 characters long"})
        }

        //salt is the level of difficulty you want the encryption to be
        const salt = await Bcrypt.genSalt();
        // Bcrypt.hash requires the string to encrypt, and the salt
        const hashedPassword = await Bcrypt.hash(password, salt)
        
        const newUser = await User.create({
            email: email,
            password: hashedPassword,
            name: `${firstName} ${lastName}`
        });

        const token = Jwt.sign( { email: newUser.email, id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h'} )
        
        res.status(200).json({ result: newUser, token })

    } catch (err) {
        res.status(500).json({error: err.message})
    }
}
