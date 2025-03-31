require("dotenv").config("../../.env");
const jwt = require("jsonwebtoken");
const secret_key = process.env.SECRET_KEY;

const encodeJWT = async payload => {
    try {
        return jwt.sign(payload, secret_key, { expiresIn: "30d" });
    } catch (error) {
        console.log(`\n[!] Error While Creating JWT - ${error}\n`);
        return null;
    }
};
const decodeJWT = async (token) => {
    try {
        return jwt.verify(token,secret_key)
    } catch (error) {
        console.log(`\n[!] Error While Decoding JWT - ${error}\n`);
        return null;
    }
};

module.exports = { encodeJWT, decodeJWT };
