// https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/

/**
 * @param {string} boxes
 * @return {number[]}
 */
function minOperations(boxes) {
    const pos = [];
    const res = [];
    for (let i = 0; i < boxes.length; i += 1) {
        if (boxes[i] === '1') pos.push(i);
    }

    for (let i = 0; i < boxes.length; i += 1) {
        const sum = pos.reduce((acc, cur) => acc + Math.abs(i - cur), 0);
        res.push(sum);
    }
    return res;
};

console.log(minOperations("001011"));
console.log(minOperations("110"));