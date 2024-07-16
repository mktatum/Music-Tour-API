const express = require("express");
const router = express.Router();
const {Stage} = require ("../models");

router.get("/", async function (req,res) {
    const stages = await Stage.findAll()
    res.send(stages)
})

router.post("/", async function (req,res) {
    const stage = await Stage.create(req.body)
    res.send(stage)
})

module.exports = router;