const data = +require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(~~(data / 5) + ~~(data / 25) + ~~(data / 125));