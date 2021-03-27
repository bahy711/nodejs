const express = require("express");
const Post = require("../models/post")

const router = express.Router();

router.get("/add", (req, res) => {
    res.render("add-post", { title: "Add Post" })
})

router.post("/add", async (req, res) => {
    await Post.add(req.body);
    res.redirect("/posts/view")
})

router.get("/view", async (req, res) => {
    const posts = await Post.getAll();
    res.render("view-posts", { title: "View posts", posts })
})

router.get("/del/:id", async (req, res) => {
    await Post.remove(req.params.id)
    res.redirect("/posts/view")
})

router.get("/edit/:id", async (req, res) => {
    const postt = await Post.getOne(req.params.id)
    res.render("edit-post", { title: "Edit posts", postt})
})

router.post("/edit/:id", async (req, res) => {
    console.log("edit");
    console.log(req.body);
    await Post.edit(req.params.id, req.body)
    res.redirect("/posts/view")
})


module.exports = router