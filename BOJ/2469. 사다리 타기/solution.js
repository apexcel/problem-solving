const [k, n, t, ...queries] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const len = +k;
const target = t.split('');
const source = target.slice().sort();

const parse = (query) => {
    const forward = [], backward = [];
    let breakPoint = false;
    for (let q of query) {
        if (q.includes('?')) {
            breakPoint = true;
            continue;
        }
        !breakPoint ? forward.push(q) : backward.push(q);
    }
    return {
        forward,
        backward: backward.reverse()
    }
}

const ghostLeg = (arr, ops) => {
    ops.forEach(op => {
        for (let i = 0; i < op.length; i += 1) {
            if (op[i] === '-') [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    })
}

const compare = (a, b) => {
    let ret = '', prevExist = false;
    for (let i = 0; i < a.length - 1; i += 1) {
        if (prevExist || a[i] === b[i]) {
            ret += '*'
            prevExist = false;
        }
        if (a[i] !== b[i] && a[i + 1] === b[i] && b[i + 1] === a[i]) {
            ret += '-'
            prevExist = true;
        }
    }
    return ret.length === len - 1 ? ret : 'x'.repeat(len - 1);
}


const { forward, backward } = parse(queries);
ghostLeg(source, forward);
ghostLeg(target, backward);
const op = compare(source, target);
console.log(op);