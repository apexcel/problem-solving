/** https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let profit = 0, prev = prices[0];
    for (let i = 1; i < prices.length; i += 1) {
        const diff = prices[i] - prev;
        prev = prices[i];
        if (diff > 0) {
            profit += diff;
        }
    }
    return profit;
};