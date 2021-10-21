/**
 * @param {number} n 
 * @param {number} left 
 * @param {number} right 
 * @returns 
 */
function solution(n, left, right) {
    const res = [];

    while (left <= right) {
        const y = Math.floor(left / n), x = left % n;
        res.push(Math.max(y, x) + 1);
        left += 1;
    }

    return res;
}