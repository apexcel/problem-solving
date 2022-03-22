const rotate = (arr, cnt = 0) => {
    const row = arr.length, col = arr[0].length;
    let rotated = Array.from(Array(col), () => Array(row));

    for (let y = 0; y < row; y += 1) {
        for (let x = 0; x < col; x += 1) {
            rotated[x][y] = arr[row - 1 - y][x];
        }
    }

    for (let i = 0; i < cnt % 4; i += 1) {
        rotated = rotate(rotated);
    }

    return rotated;
}

const coords = (arr, target) => {
    const ret = [];
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr[0].length; j += 1) {
            if (arr[i][j] === target) ret.push([j, i]);
        }
    }
    return ret;
}

function solution(key, lock) {
    const n = key.length; m = lock.length;
    const keys = Array.from(Array(4), (_, i) => coords(rotate(key, i), 1));
    const lockPos = coords(lock, 0);

    for (let k of keys) {
        for (let y = -m; y < m; y += 1) {
            for (let x = -m; x < m; x += 1) {
                const temp = [];
                for (let [kx, ky] of k) {
                    const dx = kx + x, dy = ky + y;
                    if (dx < m && dy < m && dx >= 0 && dy >= 0) {
                        temp.push([dx, dy]);
                    }
                }
                if (temp.length === lockPos.length) {
                    const res = lockPos.every(([x, y], i) => x === temp[i][0] && y === temp[i][1]);
                    if (res) return true;
                }
            }
        }
    }
    return false;
}