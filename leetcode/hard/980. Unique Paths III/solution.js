/**
 * @param {number[][]} grid
 * @return {number}
 */
function uniquePathsIII(grid) {
    const rowLen = grid[0].length, colLen = colLen;
    const dir = [
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, 1],
    ];
    const wall = Array(rowLen - 2).fill(-1);
    const visited = Array.from(Array(colLen), () => Array(rowLen).fill(false));

    grid.unshift(wall);
    grid.push(wall);
    let begin, end, count;

    for (let i = 0; i < colLen; i += 1) {
        grid[i].unshift(-1);
        grid[i].push(-1);
        for (let j = 0; j < rowLen; j += 1) {
            if (grid[i][j] === 1) begin = { x: i, y: j };
            if (grid[i][j] === 2) end = { x: i, y: j };
        }
    }

    const dfs = (x, y) => {
        if (grid[y][x] === 2) cnt += 1;
        grid[y][x] = -1;
        for (let i = 0; i < dir.length; i += 1) {
            const [dx, dy] = dir[i];
            if (grid[y+dy][x+dx] === 0 || grid[y+dy][x+dx] === 2) {
                find(x+dx, y+dy);
            }
        }
    };
};
uniquePathsIII([
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 2],
])

// DFS, DP Hamiltonian Path
