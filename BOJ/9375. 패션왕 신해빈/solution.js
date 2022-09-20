const [_, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');

const res = [];
for (let i = 0; i < data.length; i += 1) {
    const cnt = +data[i];
    const dict = {};
    for (let j = 1; j <= cnt; j += 1) {
        const [_, part] = data[i + j].split(' ');
        if (!dict[part]) dict[part] = 0;
        dict[part] += 1;
    }
    const sum = Object.values(dict).reduce((acc, cur) => acc * (cur + 1), 1);
    res.push(sum - 1);
    i += cnt;
}
console.log(res.join('\n'));
