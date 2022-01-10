const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const res = Array.from(Array(201), () => '');
for (let i = 1; i <= +input[0]; i += 1) {
    const [age, name] = input[i].split(' ');
    res[age] += input[i] + '\n';
}
console.log(res.join(''));