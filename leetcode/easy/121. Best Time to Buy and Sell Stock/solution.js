/** https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let min = prices[0], res = 0;
    for (let i = 1; i < prices.length; i += 1) {
        prices[i] < min 
            ? min = prices[i]
            : res = Math.max(res, prices[i] - min);
    }
    return res;
};