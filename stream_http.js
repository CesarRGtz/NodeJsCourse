const http = require("http");
const { createReadStream } = require("fs");
const { log } = require("console");

const server = http.createServer((req, res) => {
  const fileStream = createReadStream("./data/bigfile.txt", {
    encoding: "utf-8",
  });

  fileStream.on("data", (chunk) => {
    fileStream.pipe(res);
  });

  fileStream.on("error", (error) => {
    log("Error reading file");
  });
});

server.listen(3000);
log("Server on port 3000");