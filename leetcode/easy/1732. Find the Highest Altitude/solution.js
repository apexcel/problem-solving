// https://leetcode.com/problems/find-the-highest-altitude/
/**
 * @param {number[]} gain
 * @return {number}
 */
function largestAltitude(gain) {
    let a = 0, max = 0;
    for (let g of gain) {
        a += g;
        if (a > max) max = a;
    }
    return max;
};

largestAltitude([-5,1,5,0,-7])