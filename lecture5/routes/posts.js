const express = require("express");

const Post = require("../models/post")


const router = express.Router();


router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const postt = await Post.getOne(id)
        if (!postt) return res.status(404).json({ err: "no user with the given id " })
        res.json(postt);
    } catch (error) {
        res.status(400).json({ err: "invalid-id" })
    }
})

router.post("/", async (req, res) => {
    const { error } = Post.validate(req.body)
    if (error) return res.status(400).json(error.details[0].message)
    const postt = await Post.add(req.body)
    res.json(postt)
})

router.put("/:id", async (req, res) => {
    const { error } = Post.validate(req.body)
    if (error) return res.status(400).json(error.details[0].message)
    try {
        const postt = await Post.edit(req.params.id, req.body)
        if (!postt) return res.status(404).json({ err: "no user with the given id " })
        res.json(postt)
    } catch (error) {
        res.status(400).json({ err: "invalid-id" })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const postt = await Post.remove(req.params.id)
        if (!postt) return res.status(404).json({ err: "no user with the given id " })
        res.json(postt)
    } catch (error) {
        res.status(400).json({ err: "invalid-id" })
    }
})


module.exports = router