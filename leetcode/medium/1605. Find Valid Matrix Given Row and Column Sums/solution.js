// https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/
/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
function restoreMatrix(rowSum, colSum) {
    const restored = Array.from(Array(rowSum.length), () => new Array(colSum.length));
    for (let y = 0; y < rowSum.length; y += 1) {
        for (let x = 0; x < colSum.length; x += 1) {
            const min = Math.min(rowSum[y], colSum[x]);
            rowSum[y] -= min;
            colSum[x] -= min;
            restored[y][x] = min;
        }
    }
    console.log(restored);
    return restored;
};

restoreMatrix([14,9],[6,9,8])
restoreMatrix([0], [0])
restoreMatrix([1,0], [1])
restoreMatrix([1], [1, 0])
