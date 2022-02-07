const [n, nums] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const seq = nums.split(' ').map(Number);
let counts = [1, 0, 1, 0], prev = seq[0];

for (let i = 1; i < seq.length; i += 1) {
    if (prev > seq[i]) {
        counts[0] += 1;
        counts[3] = Math.max(counts[3], counts[2]);
        counts[2] = 1;
    }
    else if (prev < seq[i]) {
        counts[2] += 1;
        counts[1] = Math.max(counts[1], counts[0]);
        counts[0] = 1;
    }
    else {
        counts[0] += 1;
        counts[2] += 1;
    }
    prev = seq[i];
}
console.log(Math.max(...counts));