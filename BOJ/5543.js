const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').filter(Boolean);
const burgers = input.slice(0, 3);
const beverage = input.slice(3);
console.log(Math.min(...burgers) + Math.min(...beverage) - 50);