const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const sorted = [...new Set(input.slice(1))].sort((a, b) => a.length - b.length || a.localeCompare(b));
console.log(sorted.join('\n'));