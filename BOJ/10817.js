const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').filter(Boolean);
console.log(input.sort((a, z) => a -z)[1]);