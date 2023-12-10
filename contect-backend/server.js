const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnections");

connectDb();
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const port = process.env.PORT || 5000;
// const port = 5002;

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// });

app.use("/api/contact", require("./routes/contactRoutes"));
app.use(errorHandler);
app.listen(port, () => {
    console.log(`server run on port  ${port}`);
});

// console.log("hello")