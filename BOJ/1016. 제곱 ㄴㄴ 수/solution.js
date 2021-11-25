const [min, max] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(v => +v);

function solution(begin, end) {
    const sieve = Array(end - begin + 1).fill(1);
    let result = 0;

    for (let i = 2; i * i <= end; i += 1) {
        let x = Math.floor(begin / (i * i));
        if (begin % (i * i)) x += 1;

        for (let y = x * i * i; y <= end; y = (x += 1) * i * i) {
            sieve[y - begin] = 0;
        }
    }

    for (let x of sieve) if (x > 0) result += 1;
    console.log(result);
}

solution(min, max);