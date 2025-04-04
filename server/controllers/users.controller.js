const path = require("path");
require("dotenv").config("../../.env");
const userModel = require("../models/user.model");
const { encodeJWT, decodeJWT } = require("../tools/jwt-generator");
const { createHash, compareHash } = require("../tools/password-hashing");

class UsersController {
    async userSignup(req, res) {
        const { name, email, password } = req.body;
        try {
            if (name && email && password) {
                const existUser = await userModel.findOne({ email });
                if (existUser) throw new Error("User Already Registered");
                const hashed = await createHash(password.trim());
                const user = new userModel({
                    name,
                    email,
                    role: "USER",
                    password: hashed
                });
                await user.save();
                const token = await encodeJWT({
                    id: user._id,
                    name: user.name,
                    email
                });
                return res.json({
                    code: 201,
                    msg: "Registration Successfully",
                    success: true,
                    user: {
                        token,
                        id: user._id,
                        role: "ADMIN"
                    }
                });
            } else {
                throw new Error("All fields are required");
            }
        } catch (error) {
            return res.json({
                code: 403,
                msg: error.message,
                success: false
            });
        }
    }
    async userLogin(req, res) {
        const { email, password } = req.body;
        try {
            if (email && password) {
                const user = await userModel.findOne({ email });
                if (user) {
                    if (user.email === email.trim()) {
                        const hashed = await compareHash(
                            password.trim(),
                            user.password
                        );
                        if (hashed) {
                            const token = await encodeJWT({
                                id: user._id,
                                name:user.name,
                                email
                            });
                            return res.json({
                                code: 200,
                                msg: "Login Successfully",
                                success: true,
                                user: {
                                    token,
                                    id: user._id,
                                    role: user.role
                                }
                            });
                        } else {
                            throw new Error("Invalid Email Or Password");
                        }
                    } else {
                        throw new Error("Wrong Credentials");
                    }
                } else {
                    throw new Error("Invalid Credentials");
                }
            } else {
                throw new Error("All fields are required");
            }
        } catch (error) {
            return res.json({
                code: 403,
                msg: error.message,
                success: false
            });
        }
    }
}

module.exports = new UsersController();
