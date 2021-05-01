/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
function groupThePeople(groupSizes) {
    const len = Math.max(...groupSizes);
    const res = [];

    for (let i = 1; i <= len; i += 1) {
        let temp = [];
        for (let j = 0; j < groupSizes.length; j += 1) {
            if (groupSizes[j] === i) {
                temp.push(j);
            }
            if (temp.length === i) {
                res.push(temp);
                temp = [];
            }
        }
    }
    return res;
};