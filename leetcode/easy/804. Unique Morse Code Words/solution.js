// https://leetcode.com/problems/unique-morse-code-words/
/**
 * @param {string[]} words
 * @return {number}
 */
function uniqueMorseRepresentations(words) {
    const table = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const set = new Set();
    for (const word of words) {
        let str = '';
        for (const char of word) {
            str += table[char.charCodeAt(0) - 97];
        }
        set.add(str);
    }
    return set.size;
};

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])