const User = require("../Model/User");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const privateKey = process.env.privateKey;

const Registration = async (req, res) => {
    const { userName, userEmail, password } = req.body;

    if (!userName || !userEmail || !password) {
        return res.status(400).send("All fields are required.");
    }

    const existingUser = await User.findOne({ email: userEmail });
    if (existingUser) {
        return res.status(400).send("User with this email already exists.");
    }

    bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
            console.error("Error hashing password:", err);
            return res.status(500).send("Internal server error");
        }

        const newUser = new User({
            userName,
            email: userEmail,
            password: hash,
            createdAt: new Date(),
        });

        try {
            const savedUser = await newUser.save();
            res.status(201).json({ message: "User registered successfully", user: savedUser });
        } catch (error) {
            console.error("Error saving user:", error);
            res.status(500).send("Internal server error");
        }
    });
};

const Login = async (req, res) => {
    const { userEmail, password } = req.body;

    if (!userEmail || !password) {
        return res.status(400).send("Email and password are required.");
    }

    const check = await User.findOne({ email: userEmail });
    if (!check) {
        return res.status(404).send("User not found.");
    }

    bcrypt.compare(password, check.password, (err, result) => {
        if (err) {
            return res.status(500).send("Error comparing passwords.");
        }
        if (!result) {
            return res.status(401).send("Invalid password.");
        }

        jwt.sign({ email: userEmail }, privateKey, { algorithm: 'RS256' }, function (err, token) {
            if (err) {
                return res.status(500).send("Error generating token.");
            }

            res.cookie('autherization', token, {
                httpOnly: true,
                secure: true,
                sameSite: 'Strict',
                expires: new Date(Date.now() + 3600000),
                domain: 'localhost'
            });

            res.status(200).json({ token });
        });
    });
};

const Logout = async (req, res) => {
    try {
        res.clearCookie('autherization', {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
            domain: 'localhost'
        });
        res.status(200).send("Logged out successfully.");
    } catch (error) {
        console.error("Error during logout:", error);
        res.status(500).send("Internal server error during logout.");
    }
};

module.exports = {
    Registration,
    Login,
    Logout
};
