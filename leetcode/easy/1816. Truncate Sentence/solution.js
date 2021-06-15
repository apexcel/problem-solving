// https://leetcode.com/problems/truncate-sentence/
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function truncateSentence(s, k) {
    return s.split(' ').slice(0, k).join(' ');
};