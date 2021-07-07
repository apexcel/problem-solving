// https://leetcode.com/problems/fizz-buzz/
/**
 * @param {number} n
 * @return {string[]}
 */
function fizzBuzz(n) {
    return new Array(n).fill(0).map((v, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || `${i}`);
};

console.log(fizzBuzz(15))