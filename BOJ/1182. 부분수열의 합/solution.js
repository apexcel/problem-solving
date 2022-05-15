const [info, data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [n, s] = info.split(' ').map(Number);
const nums = data.split(' ').map(Number);
let cnt = 0;

for (let i = 1; i < (1 << n); i += 1) {
    let sum = 0;
    for (let j = 0; j < n; j += 1) {
        // 로그를 찍어서 부분 집합과 원소의 포함여부를 확인
        // console.log(
        //     i.toString(2).padStart(n, 0), '&',
        //     (1 << j).toString(2).padStart(n, 0), '=',
        //     (i & (1 << j)).toString(2).padStart(n, 0), '=>',
        //     j.toString(2).padStart(n, 0)
        // )
        if (i & (1 << j)) sum += nums[j];
    }
    if (sum === s) cnt += 1;
}
console.log(cnt);

