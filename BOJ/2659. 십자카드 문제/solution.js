const input = +require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').join('');

const clockNumber = n => {
    let ret = n;
    for (let i = 0; i < 3; i += 1) {
        n = (n % 1000) * 10 + Math.floor(n / 1000);
        if (ret > n) ret = n;
    }
    return ret;
};

let cnt = 0;
for (let i = 1111; i <= clockNumber(input); i += 1) {
    if (clockNumber(i) === i) cnt += 1;
}

console.log(cnt);