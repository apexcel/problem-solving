/** https://leetcode.com/problems/counting-bits/
 * @param {number} n
 * @return {number[]}
 */
function countBits(n) {
    const dp = new Array(n+1).fill(0);
    for (let i = 1; i <= n; i += 1) {
        dp[i] = dp[i >> 1] + (i % 2);
    }
    return dp;
};

/**
 * 이진수에서 우측 시프트는 2로 나누는 것과 같고 좌측 시프트는 2를 곱하는 것과 같다.
 * 짝수는 LSB가 항상 0이고 홀수는 1이다.
 * 따라서 짝수라면 앞서 구한 값의 1/2 만큼의 1의 개수를 가지고 있기 때문에 우측 시프트를 진행하면 된다
 * 홀수도 앞서 구한 값의 1/2에 1을 더한 것이 현재 값이기 때문에 1/2의 값에 1을 더해주면 되는데 홀수는 항상 2로 나누었을 때
 * 나머지가 1이므로 i % 2를 해주면된다.
 * 
 * 5의 경우 3 * 2 - 1이므로 3에서 좌측 시프트 한뒤 1을 빼주면 된다. 이를 반대로 생각하면
 * 3은 floor(5 / 2) + 1와 같다.
 */