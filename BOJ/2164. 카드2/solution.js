// const n = parseInt(require('fs').readFileSync('/dev/stdin').toString(), 10);
function solution(n) {
    if (n === 1) return 1;
    let res = Array(n).fill(0).map((_, i) => i + 1);
    let temp = [];
    let deleteBegin = true;

    while (res.length > 1) {
        let i = deleteBegin ? 1 : 0;
        for (i; i < res.length; i += 2) {
            temp.push(res[i]);
        }
        deleteBegin = res.length % 2 === 0 ? deleteBegin : !deleteBegin;
        res = temp;
        temp = [];
    }
    return res[0];
}


function isPowerOfTwo(n) { // 2의 거듭제곱 판별
    if (n === 0) return false;
    return (n & -n) === n;
}

function betterSolution (n) {
    if (isPowerOfTwo(n)) return n;
    let b = 1;
    while (b < n) b *= 2;
    return 2 * n - b;
}


Array(20).fill(0).map((_, i) => i + 1).forEach(v => console.log(betterSolution(v), solution(v)))