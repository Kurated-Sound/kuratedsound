import User from '../models/userModel.js'
import Bcrypt from 'bcryptjs'

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
        // Bcrypt.hash requires the string to decrypt, and the salt
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


