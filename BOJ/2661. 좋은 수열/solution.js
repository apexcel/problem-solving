const n = +require('fs').readFileSync('/dev/stdin').toString();
const list = [1, 2, 3];
const res = [];

const isValid = seq => {
    const len = seq.length;
    for (let i = 1; i <= Math.floor(len / 2); i += 1) {
        const a = seq.slice(len - i * 2, len - i).join('');
        const b = seq.slice(len - i, len).join('');
        if (a === b) return false;
    }
    return true;
}

const pick = (depth) => {
    if (n === depth) {
        console.log(res.join(''));
        process.exit();
    }

    for (let i = 0; i < 3; i += 1) {
        res.push(list[i]);
        if (!isValid(res)) {
            res.pop();
            continue;
        }
        pick(depth + 1);
        res.pop();
    }
}

pick(0);