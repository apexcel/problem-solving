// https://leetcode.com/problems/count-the-number-of-consistent-strings/submissions/
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
function countConsistentStrings(allowed, words) {
    let count = 0;
    for (let i = 0; i < words.length; i += 1) {
        for (const w of words[i]) {
            if (!allowed.includes(w)) {
                count += 1;
                break;
            }
        }
    }
    return words.length - count;
};