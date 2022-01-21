const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(input.slice(1).map(v => v.split(',').reduce((sum, val) => sum + +val, 0)).join('\n'));