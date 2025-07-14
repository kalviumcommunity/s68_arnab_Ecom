const {model,Schema} = require("mongoose");

const UserSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    userName: { type: String, required: true }, 
    userEmail: { 
        type: String,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
        lowercase: true,
        required: true, unique: true 
    },
    password: { 
        type: String,
        minLength: [6, "Password must be at least 6 characters long"],
        required: true 
    },
    role:{
        type: String,
        enum: ["user", "vendor"],
        default: "user"
    },
    createdAt: { type: Date, default: Date.now },
});
const User = model("User", UserSchema);
module.exports = User;