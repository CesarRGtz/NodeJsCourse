const path = require('path');

const filePath = path.join(__dirname, 'index.js');

console.log(path.basename(filePath)); // index.js
console.log(path.dirname(filePath)); // /home/andre/andre
console.log(path.parse(filePath)); // { root: '/', dir: '/home/andre/andre', base: 'index.js', ext: '.js', name: 'index' }
console.log(path.resolve('dist')); // /home/andre/andre/dist

