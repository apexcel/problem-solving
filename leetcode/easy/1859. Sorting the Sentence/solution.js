// https://leetcode.com/problems/sorting-the-sentence/
/**
 * @param {string} s
 * @return {string}
 */
function sortSentence(s) {
    const ss = s.split(' ');
    const sss = Array(ss.length);
    ss.forEach(v => {
        const order = +v[v.length - 1] - 1;
        sss[order] = v.substring(0, v.length-1);
    })
    return sss.join(' ');
};

sortSentence("is2 sentence4 This1 a3")