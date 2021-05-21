// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
/**
 * @param {number} n
 * @return {number[]}
 */
function sumZero(n) {
    const res = [];
    if (n % 2 !== 0) {
        res.push(0);
        n -= 1;
    }
    for (let i = 1; i <= n; i += 1) {
        res.push(i % 2 ? -(i+1): i);
    }
    return res;
};

function sumZero2(n) {
    const res = [];
    let sum = 0;
    for (let i = 1; i < n; i += 1) {
        res[i-1] = i;
        sum += i;
    }
    res.push(-sum);
    return res;
}

console.log(sumZero(5));
console.log(sumZero(1));
console.log(sumZero(4));
console.log(sumZero(3));

