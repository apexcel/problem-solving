const [_, k] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const nums = k.split(' ').map(Number);
const map = new Map();
let idx = 0;

nums.slice().sort((a, b) => a - b).forEach(num => {
    if (!map.has(num)) map.set(num, idx++);
});
console.log(nums.map(num => map.get(num)).join(' '));
