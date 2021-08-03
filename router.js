const express = require('express');
const router = express.Router();
const data = require ("./pizza")

router.get("/",(req,res)=>{
    res.send(data);
    res.end()


})
module.exports = router