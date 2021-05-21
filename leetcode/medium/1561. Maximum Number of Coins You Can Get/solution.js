// https://leetcode.com/problems/maximum-number-of-coins-you-can-get/
/**
 * @param {number[]} piles
 * @return {number}
 */
function maxCoins(piles) {
    const len = piles.length / 3 * 2;
    let sum = 0;
    piles.sort((a, b) => b - a);

    for (let i = 1; i <= len; i += 2) {
        sum += piles[i];
    }
    return sum;
};

// maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4])
maxCoins([2, 4, 1, 2, 7, 8])