const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const vals = input[1].split(' ').map(v => +v);
let m = vals[0], sum = 0;

for (let i = 0; i < vals.length; i += 1) {
    if (m < vals[i]) {
        m = vals[i];
    }
    sum += vals[i];
}

console.log(sum / vals.length / m * 100);
