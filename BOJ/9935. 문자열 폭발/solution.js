const [target, source] = require('fs').readFileSync('./data.in').toString().trim().split('\n');

const stk = [];
for (let i = 0; i < target.length; i += 1) {
    stk.push(target[i]);

    if (stk.length >= source.length) {
        let isSame = true;

        for (let j = 0; j < source.length; j += 1) {
            if (stk[stk.length - source.length + j] !== source[j]) {
                isSame = false;
                break;
            }
        }

        if (isSame) {
            for (let j = 0; j < source.length; j += 1) {
                stk.pop();
            }
        }
    }
}

console.log(stk.length ? stk.join('') : 'FRULA');