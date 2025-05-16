const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("welcome to the home page");
    return res.end();
  }
  if (req.url === "/about") {
    for (let i = 0; i < 100000; i++) {
      console.log(Math.random() * i);
    }
    res.write("welcome to the about page");
    return res.end();
  }

  res.end("page not found");
});

server.listen(3000);
log("server is listening on port 3000");