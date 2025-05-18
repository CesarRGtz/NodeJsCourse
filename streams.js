// const { writeFile } = require("fs/promises");

// const createBigFile = async () => {
//   await writeFile("./data/bigfile.txt", "Hello World\n".repeat(10000));
// };

// createBigFile();

const { createReadStream } = require("fs");

const stream = createReadStream("./data/bigfile.txt", {
  encoding: "utf-8",
});

stream.on("data", (chunk) => {
  console.log("New chunk received:");
  console.log(chunk);
});

stream.on("end", () => {
  console.log("Se termino de leer el archivo");
});

stream.on("error", (err) => {
  console.log("Error reading file");
  console.log(err);
});
