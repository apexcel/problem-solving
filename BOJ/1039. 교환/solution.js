const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
String.prototype.replaceAt = function (index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

const solution = (n, k) => {
    const len = n.length
        , done = +k
        , set = new Set()
        , q = [[0, n]];

    let mx = -1, next = -1;

    while (q.length) {
        const [cnt, str] = q.shift();

        if (cnt > next) {
            next = cnt;
            set.clear();
        }
        if (cnt === done && mx < +str) mx = +str;
        if (cnt > done) break;

        for (let i = 0; i < len; i += 1) {
            for (let j = i + 1; j < len; j += 1) {
                let copy = str, tmp = copy[i];
                copy = copy.replaceAt(i, copy[j]);
                copy = copy.replaceAt(j, tmp);
                if (copy[0] !== '0' && !set.has(copy)) {
                    q.push([cnt + 1, copy]);
                    set.add(copy);
                }
            }
        }
    }
    return mx;
}

console.log(solution(n, k));