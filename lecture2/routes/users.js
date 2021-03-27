const express = require("express");

const router = express.Router();

const users = [
  { id: 1, name: "Ahmed" },
  { id: 2, name: "Mohamed" },
];

router.get("/", (req, res) => {
  res.send(users);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === +id);
  res.send(user);
});

router.post("/", (req, res) => {
  const { name } = req.body;
  const id = users[users.length - 1].id + 1;
  users.push({ id, name });
  res.send(users);
});

//edit
//router.put()

//delete
//router.delete()

module.exports = router