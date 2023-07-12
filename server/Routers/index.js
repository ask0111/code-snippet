const express = require("express");
const postAxios = require("./postAxios");
const router = new express.Router();



router.get('/', (req, res)=>{
    res.send("Hare Krishna Welcome!");
    postAxios()
});

router.post('/test', (req, res)=>{
    console.log(req.body);
    // postAxios()
    res.send("Test...")
});
router.post('/submission', (req, res)=>{

});

module.exports = router;