console.log(require('fs').readFileSync('/dev/stdin').toString().split(' ').reduce((acc, cur) => acc + parseInt(cur, 10), 0));