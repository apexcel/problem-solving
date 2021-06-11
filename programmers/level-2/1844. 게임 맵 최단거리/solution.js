

const dir = [
    [0, 1], // down
    [1, 0], // right
    [0, -1], // up
    [-1, 0], // left
];

/**
 * @param {number[][]} maps 
 * @returns {number}
 */
function solution(maps) {
    const n = maps.length, m = maps[0].length;
    maps[0][0] = 2;
    maps[n - 1][m - 1] = 3;
    console.table(maps)

    for (let i = 0; i < n; i += 1) {
        maps[i].push(1);
        maps[i].unshift(1);
    }
    const line = Array(m + 2).fill(1);
    maps.unshift(line);
    maps.push(line);
}

function findPath(maps, n, m) {
    const q = [];
    


    for (let i = 0; i < 4; i += 1) {
        const [dx, dy] = dir[i];
    }
}

// solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]]);
solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 0], [0, 0, 0, 0, 1]]);