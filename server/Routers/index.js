const express = require("express");
const router = new express.Router();
const CodeCollection = require("../db/model")
const axios = require('axios');
require('dotenv').config();


const X_RAPIDE_API_KEY = process.env.X_RAPIDE_API_KEY;

router.get('/', (req, res)=>{
    res.send("Hare Krishna Welcome!");
});

module.exports = router;