// https://leetcode.com/problems/increasing-decreasing-string/
/**
 * @param {string} s
 * @return {string}
 */
function sortString(s) {
    let ss = s.split('').sort(), output = '';
    while (ss.length) {
        ss = ss.filter((v, i) => {
            if (i === 0 || v !== output[output.length - 1]) {
                output += v;
                return false;
            }
            return true;
        }).reverse();
    }
    console.log(output);
    return output;
};
