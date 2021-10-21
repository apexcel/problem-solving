console.log(require('fs').readFileSync('/dev/stdin').toString().split(' ').reduce((prev, cur) => prev / cur));
