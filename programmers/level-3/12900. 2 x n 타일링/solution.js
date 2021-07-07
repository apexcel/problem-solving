/**
 * https://programmers.co.kr/learn/courses/30/lessons/12900
 * @param {number} n 
 */
function solution(n) {
    if (n < 3) return n;
    const dp = [1, 2];
    for (let i = 2; i < n; i += 1) {
        const t = dp[0];
        dp[0] = dp[1];
        dp[1] = (dp[0] + t) % 1000000007;
    }
    return dp[1];
}