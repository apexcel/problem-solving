// https://leetcode.com/problems/to-lower-case/
/**
 * @param {string} str
 * @return {string}
 */
function toLowerCase(str) {
    return (str.split('').map(s => s.toLowerCase())).join('');
};