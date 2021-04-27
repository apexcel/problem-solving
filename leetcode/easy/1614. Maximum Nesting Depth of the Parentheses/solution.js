// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

/**
 * @param {string} s
 * @return {number}
 */
function maxDepth(s) {
    let max = 0, count = 0;
    for (let i = 0; i < s.length; i += 1) {
        if (s[i] === '(') count += 1;
        if (s[i] === ')') count -= 1;
        max = count > max ? count : max;
    }
    return max;
};