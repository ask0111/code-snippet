const express = require("express");
const bodyParser = require("body-parser");
const router = require("./Routers/index");
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(router);
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3001',
}
));

app.listen(PORT, ()=>{
    console.log("Successfully Connected...");
})