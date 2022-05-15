const [source, target] = require('fs').readFileSync('./data.in').toString().trim().split(' ');
let res = 987654321;
for (let i = 0; i + source.length <= target.length; i += 1) {
    const str = target.substring(i, i + source.length);
    const cnt = Array.prototype.reduce.call(source, (acc, cur, i) => acc += str[i] !== cur ? 1 : 0, 0);
    res = Math.min(res, cnt);
}
console.log(res);