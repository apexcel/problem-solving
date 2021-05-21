// https://leetcode.com/problems/maximum-ice-cream-bars/

/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
function maxIceCream(costs, coins) {
    let i = 0;
    costs.sort((a, b) => a - b);
    while (coins > 0) {
        if (costs[i] <= coins) coins -= costs[i];
        else break;
        i += 1;
    }
    return i;
};

console.log(maxIceCream([1, 6, 3, 1, 2, 5], 20))