const http = require("http");

const server = http.createServer();

const users = [
    {id: 1, name:"Ahmed"},
    {id: 2, name:"Mohammed"},
]

server.on("request", (req, res) => {

    if(req.url==="/users" && req.method === "GET"){
    res.write(JSON.stringify(users));
        res.end()
    }

    res.write("<h1>404 not-found</h1>");
    res.end()
});

server.listen(3000);
