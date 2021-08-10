/** https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    s = s.split('').sort();
    t = t.split('').sort();
    return s.join('') === t.join('');
}