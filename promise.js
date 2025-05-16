const { readFile } = require("fs/promises");
// const { promisify } = require("util");

// const readFilePromise = promisify(readFile);

// function readFilePromise(filePath) {
//   return new Promise((resolve, reject) => {
//     readFile(filePath, "utf8", (err, result) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve(result);
//     });
//   });
// }

// readFilePromise("./data/first.txt").then((result) => {
//   console.log(result);
// }).catch((err) => {
//   console.log(err);
// });

async function read() {
  try {
    const first = await readFile("./data/first.txt", "utf8");
    const second = await readFile("./data/second.txt", "utf8");
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
}
read();
