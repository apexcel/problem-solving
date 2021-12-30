const r = +require('fs').readFileSync('/dev/stdin').toString();
console.log((Math.PI * r * r).toFixed(6));
console.log((2 * r * r).toFixed(6));