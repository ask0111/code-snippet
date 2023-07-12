const express = require("express");
const router = require("./Routers/index");
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(router);
app.use(cors());

app.listen(PORT, ()=>{
    console.log("Successfully Connected...");
})