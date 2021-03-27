const express = require("express");
const logger = require("./middlewares/logger");
const userRouter = require("./routes/users");

const app = express();

//middleware
app.use(express.json());
app.use(logger);

app.use("/users" ,userRouter);

// app.use((req, res, next) => {
//   console.log(req.method, req.url);
//   next();
// });

// app.use((req, res, next) => {
//   console.log("second middleware");
//   if (req.body.password !== "1234") res.status(401).send("unauthorized");
//   else next();
// });

// const myMiddleware = (req, res)=>{
//   console.log(req.method, req.url);
// }

const posts = [{ id: 1, title: "first post", body: "first body", userId: 1 }];

app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

app.listen(5000, (error) => {
  console.log("listening on port 5000");
});
