const [_, A, B] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const a = A.split(' '), b = B.split(' ');
const set = new Set([...a, ...b]);
const sizeA = a.length, sizeB = b.length;
const both = sizeA + sizeB - set.size;
console.log(sizeA + sizeB - (2 * both));