/** https://leetcode.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    if (n <= 2) return n;
    let prev = 1, current = 2;
    for (let i = 3; i < n; i += 1) {
        let temp = current;
        current += prev;
        prev = temp;
    }
    return prev + current;
};

/**
 * 1 -> 1 => 1
 * 2 -> 1+1, 2 => 2
 * 3 -> 1+1+1, 2+1, 1+2 => 3
 * 4 -> 1+1+1+1, 2+1+1, 1+2+1, 1+1+2, 2+2 => 5
 * 가능한 조합의 개수는 피보나치이다.
 */