const express = require("express");
const mongoose = require("mongoose");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static("public"))

app.set("view engine", "ejs");

app.use("/api/users", require("./routes/users"))
app.use("/posts", require("./routes/postsViews"))

app.use(require("./routes/auth"))
// app.use("/posts" , auth , postsRoutes)

app.get("/", auth, (req, res)=>{
    const token = req.get("token")
    console.log(token);
    res.send("welocme")
})



const port = process.env.PORT || 5000

mongoose.connect("mongodb://localhost/lecture5", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to mongodb");
    app.listen(port, (err) => {
        if (!err) console.log(`listening on port ${port}`);
    })
}).catch(err => {
    console.log(err);
})