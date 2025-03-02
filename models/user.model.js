const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        trim: true,
        minlength: [2, "Name must be at least 2 characters long."]
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        trim: true,
        unique: [true, "Duplicate Email Address"],
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address."]
    },
    phone: {
        type: String,
        required: [true, "Phone number is required."],
        unique: true,
        match: [/^\d{11}$/, "Phone number must be 10 digits long."]
    },
    password: {
        type: String,
       required: [true, "Password is required."],
       minlength: [6, "Password must be at least 6 characters long."]
    }
});

module.exports = mongoose.model("User", userSchema);
