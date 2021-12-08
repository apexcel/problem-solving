const str = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
console.log(str[0] === '' ? 0 : str.length);