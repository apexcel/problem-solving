const [tc, ...rest] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const data = [];
let tmp;

for (let i = 0; i < rest.length; i += 3) {
    const r1 = rest[i + 1].split(' ');
    const r2 = rest[i + 2].split(' ');
    tmp = [];
    for (let j = 0; j < +rest[i]; j += 1) {
        tmp[j] = [+r1[j], +r2[j]];
    }
    data.push(tmp);
}

const solution = s => {
    if (s.length <= 2) {
        return s.length === 1 
            ? Math.max(s[0][0], s[0][1])
            : Math.max(s[0][0] + s[1][1], s[0][1] + s[1][0]); 
    }
    s[1][0] += s[0][1];
    s[1][1] += s[0][0];
    
    for (let i = 2; i < s.length; i += 1) {
        const [ppl, ppr] = s[i - 2];
        const [pl, pr] = s[i - 1];

        s[i][0] += Math.max(ppr, pr);
        s[i][1] += Math.max(ppl, pl);
    }

    return Math.max(...s[s.length - 1]);
}

console.log(data.map(solution).join('\n'));