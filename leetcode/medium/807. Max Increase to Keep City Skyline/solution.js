// https://leetcode.com/problems/max-increase-to-keep-city-skyline/
/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxIncreaseKeepingSkyline(grid) {
    const len = grid.length;
    const axis = Array.from(Array(len), () => Array());
    let sum = 0;

    for (let y = 0; y < len; y += 1) {
        axis[y][0] = Math.max(...grid[y]);
        let max = 0;
        for (let x = 0; x < len; x += 1) {
            if (grid[x][y] > max) max = grid[x][y];
        }
        axis[y][1] = max;
    }

    for (let y = 0; y < len; y += 1) {
        for (let x = 0; x < len; x += 1) {
            sum += Math.min(axis[y][0], axis[x][1]) - grid[y][x];
        }
    }
    console.log(sum);
    return sum;
};

maxIncreaseKeepingSkyline([[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]])