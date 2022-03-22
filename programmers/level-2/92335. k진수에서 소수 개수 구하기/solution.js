const isPrime = x => {
    X = BigInt(x);
    if (X <= 1n) return false;
    for (let i = 2n; i * i <= X; i += 1n) {
        if (X % i === 0n) return false;
    }
    return true;
};

function solution(n, k) {
    const kth = n.toString(k);

    let num = '', cnt = 0;
    for (let n of kth) {
        if (n === '0') {
            if (isPrime(num)) cnt += 1;
            num = '';
        }
        else {
            num += n;
        }
    }
    if (isPrime(num)) cnt += 1;
    return cnt;
}