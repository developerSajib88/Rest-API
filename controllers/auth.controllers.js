const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const SALT_ROUNDS = 10;

/**
 * Login User
 */
module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ status: 404, message: "Email not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ status: 401, message: "Incorrect password" });
        }

        const payload = {
            id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "1h"});
        
        res.status(200).json({ 
            status: 200,
            message: "Login successful",
            accessToken: token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
            } 
        });

    } catch (error) {
        res.status(500).json({ status: 500, message: "Internal Server Error", error: error.message });
    }
};

/**
 * Register User
 */
module.exports.register = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        const newUser = await User.create({ name, email, phone, password: hashedPassword });

        res.status(201).json({ status: 201, message: "Account created successfully", data: newUser });

    } catch (error) {
        res.status(500).json({ status: 500, message: "Internal Server Error", error: error.message });
    }
};
