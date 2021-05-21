// https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/

/**
 * @param {string} boxes
 * @return {number[]}
 */
function minOperations(boxes) {
    const len = boxes.length;
    const counter = Array(len).fill(0);

    let sum = 0, exist = 0;    
    for (let i = 0; i < len; i += 1) {
        counter[i] += sum;
        if (boxes[i] === '1') exist += 1;
        sum += exist;
    }

    sum = 0, exist = 0;
    for (let i = len - 1; i >= 0; i -= 1) {
        counter[i] += sum;
        if (boxes[i] === '1') exist += 1;
        sum += exist;
    }

    return counter;
};

console.log(minOperations("001011"));