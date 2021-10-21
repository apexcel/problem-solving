const isSelfNumber = Array(10001).fill(1);
let str = '';

function d(n) {
    let quot = n, res = n;
    while (quot > 0) {
        res += quot % 10;
        quot = Math.floor(quot / 10);
    }
    return res;
}

for (let i = 1; i <= isSelfNumber.length; i += 1) {
    isSelfNumber[d(i)] = 0;
}

for (let i = 1; i < isSelfNumber.length; i += 1) {
    if (isSelfNumber[i]) {
        str += i + '\n';
    }
}

console.log(str);