const express = require("express");
const User = require("../models/users");

const router = express.Router();

router.get("/", async (req, res) => {
  //   users = User.getUsers().then((users)=>{
  //       res.send(users);
  //   });

  users = await User.getUsers();
  res.send(users);
});


//=======get one 
//=======add one
//=======edit
//=======delete

module.exports = router