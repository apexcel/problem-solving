const n = +require('fs').readFileSync('/dev/stdin').toString();
console.log(!(n % 2) ? 'SK' : 'CY');