const n = +require('fs').readFileSync('/dev/stdin').toString();
const result = () => {
    let cnt = 0, str = '';
    const add = (k, move) => {
        cnt += k;
        str += move + '\n';
    };
    const get = () => ({ cnt, str });
    return { add, get };
};

const res = result();

const hanoi = (n, from, to, by) => {
    if (n === 1) {
        res.add(1, from + ' ' + to);
        return;
    }
    hanoi(n - 1, from, by, to);
    res.add(1, from + ' ' + to);
    hanoi(n - 1, by, to, from);
};

hanoi(n, '1', '3', '2');
console.log(res.get().cnt);
console.log(res.get().str);