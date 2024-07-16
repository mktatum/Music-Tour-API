const express = require("express");
const router = express.Router();
const {Band} = require ("../models");

router.get("/", async function (req,res) {
    const bands = await Band.findAll()
    res.send(bands)
})

router.post("/", async function (req,res) {
    const bands = await Band.create(req.body)
    res.send(bands)
})

module.exports = router;