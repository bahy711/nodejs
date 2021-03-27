const express = require("express");

const User = require("../models/user")
const UserController = require("../controller/user")

const router = express.Router();

router.get("/", UserController.getUsers)

router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.getOne(id)
        if (!user) return res.status(404).json({ err: "no user with the given id " })
        res.json(user);
    } catch (error) {
        res.status(400).json({ err: "invalid-id" })
    }
})

router.post("/", async (req, res) => {
    const { error } = User.validate(req.body)
    if (error) return res.status(400).json(error.details[0].message)
    const user = await User.add(req.body)
    res.json(user)
})

router.put("/:id", async (req, res) => {
    const { error } = User.validate(req.body)
    if (error) return res.status(400).json(error.details[0].message)
    try {
        const user = await User.edit(req.params.id, req.body)
        res.json(user)
    } catch (error) {
        res.status(400).json({ err: "invalid-id" })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const user = await User.remove(req.params.id)
        res.json(user)
    } catch (error) {
        res.status(400).json({ err: "invalid-id" })
    }
})


module.exports = router