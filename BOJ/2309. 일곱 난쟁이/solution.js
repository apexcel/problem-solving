const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let picked = [];
const sum = arr => arr.reduce((acc, cur) => acc + cur, 0);
const pick = (begin, depth) => {
    if (depth === 7) {
        if (sum(picked) === 100) {
            console.log(picked.sort((a, b) => a - b).join('\n'));
            process.exit();
        }
        return;
    }

    for (let i = begin; i < input.length; i += 1) {
        picked.push(+input[i]);
        pick(begin + 1, depth + 1);
        picked.pop();
    }
};
pick(0, 0);
