/** https://leetcode.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    if (x < 0) return false;
    const X = x.toString();
    let str = '';
    for (let i = X.length - 1; i >= 0; i -= 1) {
        str += X[i];
    }

    return str === X;
};

isPalindrome(10)