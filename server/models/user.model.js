const mongoose = require("mongoose");

// Define the user schema with timestamps
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            default: "USER"
        }
    },
    {
        timestamps: true
    }
);

// Create the user model
const User = mongoose.model("User", userSchema);

// Export the user model
module.exports = User;
