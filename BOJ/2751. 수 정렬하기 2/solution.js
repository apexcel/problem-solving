const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
console.log([...new Set(input.slice(1).map(Number).sort((a, b) => a - b))].join('\n'));