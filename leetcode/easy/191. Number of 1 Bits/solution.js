/** https://leetcode.com/problems/number-of-1-bits/
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight(n) {
    const bits = n.toString(2).match(/1/g);
    return bits ? bits.length : 0;
};

console.log(hammingWeight(0))