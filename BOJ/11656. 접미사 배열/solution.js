const str = require('fs').readFileSync('/dev/stdin').toString().trim();
const len = str.length;
const indices = Array(len).fill(0).map((_, i) => i);

const cmp = (pos1, pos2) => {
    const a = str.substring(pos1, len);
    const b = str.substring(pos2, len);
    return a.localeCompare(b);
}

const res = indices.sort(cmp).map(pos => str.substring(pos, len + 1));
console.log(res.join('\n'));
