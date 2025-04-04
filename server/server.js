// Requiring All Packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
require("dotenv").config();

// Defined Environments Variables
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST;
const DB_NAME = process.env.DB_NAME;
const MONGO_URI = process.env.MONGO_URI;

// Middlewares uses here
app.use(express.json());
app.use(cors({ origin: "http://localhost:4000" }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Serve Statics Files
const publicPath = path.join(__dirname);
app.use(express.static(publicPath + "/public/"));

// Examples Uses Here...
//const router = require("./routes/file.upload");
//app.use("/file", router);
const usersRoutes = require("./routes/users.routes")
app.use("/api",usersRoutes)


// DB connection here...
const createConnection = require("./configs/db.connection");
createConnection(app, PORT, HOST, DB_NAME, MONGO_URI);
