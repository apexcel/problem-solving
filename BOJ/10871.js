const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const tc = input[0].split(' ');
const seq = input[1].split(' ').map(el => parseInt(el));
function f(n, x, arr) {
    let ret = [];
    for (let i = 0; i < seq.length; i += 1) {
        if (x > arr[i]) ret.push(arr[i]);
    }
    console.log(ret.join(' '));
}
f(tc[0], tc[1], seq);