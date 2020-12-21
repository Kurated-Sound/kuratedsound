import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true, minlength: 5},
    displayName: { type: String }
});



                //                    // user will be referenced, userSchema
module.export = User = mongoose.model("user", userSchema);
