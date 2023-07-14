const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const router = require("./Routers/index");
require("./db/db")
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(router);
app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, ()=>{
    console.log("Successfully Connected...");
})