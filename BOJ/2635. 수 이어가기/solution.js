const a = +require('fs').readFileSync('/dev/stdin').toString();
const solution = (a, b) => {
    const ret = [a, b];

    const calc = (alpha, beta) => {
        const gamma = alpha - beta;
        if (gamma < 0) return;
        ret.push(gamma);
        calc(beta, gamma);
    }

    calc(a, b);
    return ret;
}

let res = [];
for (let b = Math.floor(a / 2); b <= Math.ceil(a * 2 / 3); b += 1) {
    const arr = solution(a, b);
    if (res.length < arr.length) {
        res = arr;
    }
}
console.log(res.length);
console.log(res.join(' '));