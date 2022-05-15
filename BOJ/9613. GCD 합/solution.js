const [n, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const gcd = (a, b) => a % b ? gcd(b, a % b) : b
const res = [];

for (let d of data) {
    const [_, ...nums] = d.split(' ').map(Number);
    let sum = 0;
    for (let i = 0; i < nums.length; i += 1) {
        for (let j = i + 1; j < nums.length; j += 1) {
            sum += gcd(nums[i], nums[j])
        }
    }
    res.push(sum);
}
console.log(res.join('\n'));