const data = require('fs').readFileSync('./data.in').toString().trim().split(' ').map(Number);
const pieces = [1, 1, 2, 2, 2, 8].map((piece, i) => piece - data[i]);
console.log(pieces.join(' '));
