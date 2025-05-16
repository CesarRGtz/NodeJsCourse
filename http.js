const http = require("http");

const server = http
  .createServer((req, res) => {
    console.log(req.url);

    if (req.url === "/") {
      res.write("Hola Mundo");
      return res.end();
    }

    if (req.url === "/about") {
      res.write("acerca de ");
      return res.end();
    }

    res.write(`
        <h1>Error Not found</h1>
        <p>Pagina no encontrada</p>
        `);
    res.end();
  });
  
  server.listen(3000);

console.log("Server running at http://" + "localhost:3000/");
