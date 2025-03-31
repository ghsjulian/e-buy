const bcrypt = require("bcryptjs");

const createHash = async password => {
    try {
        const salt = await bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        return hash;
    } catch (error) {
        console.error(`\n[!] Error While Hashing Password - ${error}`);
        return null;
    }
};
const compareHash = async (password, hashed) => {
    try {
        return bcrypt.compareSync(password, hashed);
    } catch (error) {
        console.error(`\n[!] Error While Comparing Hashed - ${error}`);
        return null;
    }
};

module.exports = { createHash, compareHash };
