const [n, ...schedules] = require('fs')
    .readFileSync('./data.in')
    .toString()
    .trim()
    .split('\n');

const sorted = schedules.flatMap(schedule => {
    const [begin, end] = schedule.split(' ').map(Number);
    return [[begin, 1], [end, -1]];
}).sort((a, b) => a[0] - b[0] || a[1] - b[1]);

let cnt = 0, mx = 0;

for (let i = 0; i < sorted.length; i += 1) {
    cnt += sorted[i][1];
    mx = Math.max(mx, cnt);
    console.log(mx, cnt);
}

console.log(mx);
