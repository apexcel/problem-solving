console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').reduce((acc, cur) => acc + (+cur) ** 2, 0) % 10);
