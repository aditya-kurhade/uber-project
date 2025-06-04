const dotenv = require("dotenv");
dotenv.config();
const cors = require('cors');
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")

const userRoutes = require("./routes/user.route")
const captainRoutes = require("./routes/captian.route")

const connectToDb = require("./db/db");
connectToDb()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.user(cookieParser())


app.get("/", (req, res) => {
    res.send("hello word") 
});

app.use("/user", userRoutes);
app.use("/captains", captainRoutes);

module.exports = app;