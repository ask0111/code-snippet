const express = require("express");

const router = new express.Router();

router.get('/', (req, res)=>{
    res.send("Hare Krishna Welcome!")
});
router.post('/submission', (req, res)=>{

});

module.exports = router;