const mongoose = require("mongoose");

// Colors Defined
const RED = "\033[0;31m";
const GREEN = "\033[0;32m";
const BOLD = "\033[1m";
const BROWN = "\033[0;33m";
const BLUE = "\033[0;34m";
const PURPLE = "\033[0;35m";
const CYAN = "\033[0;36m";
const YELLOW = "\033[1;33m";
const WHITE = "\033[1;37m";

const createConnection = async (app, PORT, HOST, DB_NAME, MONGO_URI) => {
    mongoose
        .connect(MONGO_URI, { dbName: DB_NAME })
        .then(() => {
            app.listen(PORT, () => {
                console.clear()
                console.log(
                    `\n${BOLD}${CYAN}_____________________________________________`
                );
                console.log(
                    `\n${WHITE}${BOLD}[+] ${BOLD}${GREEN}Database Connected Successfully\n`
                );
                console.log(
                    `\n${WHITE}${BOLD}[+] ${BOLD}${YELLOW}Server Listening - ${BOLD}${WHITE}${HOST}:${PORT}\n`
                );
                console.log(
                    `\n${WHITE}${BOLD}[+] ${BOLD}${WHITE}GitHub - ${BOLD}${YELLOW}https://github.com/ghsjulian\n`
                );
                console.log(
                    `\n${WHITE}${BOLD}[+] ${BOLD}${GREEN} Developer - ${BOLD}${WHITE}Ghs Julian\n`
                );
                console.log(
                    `${BOLD}${CYAN}_____________________________________________`
                );
            });
        })
        .catch(error => {
            console.clear()
            console.error(
                `\n${BOLD}${YELLOW}[!] ${BOLD}${RED}Error While Connecting Database : \n`
            );
            console.error(`\n${BOLD}${RED}error\n`);
        });
};
module.exports = createConnection;
