const express = require('express');
const mongoose = require("mongoose");
const auth = require("./middlewares/auth")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.use(require("./routes/auth"))
// app.use("/posts" , auth , postsRoutes)

app.get("/", auth, (req, res)=>{
    const token = req.get("token")
    console.log(token);
    res.send("welocme")
})

mongoose.connect("mongodb://localhost/MansouraDbB", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("connected to db");
    app.listen(port, () => console.log(`listening on http://localhost:${port}`));
}).catch(err => {
    console.log(err);
})


