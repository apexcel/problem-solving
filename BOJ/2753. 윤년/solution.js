const input = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim(), 10);
console.log((input % 4 === 0 && input % 100 !== 0) || input % 400 === 0 ? 1 : 0);
