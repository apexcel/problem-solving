# 풀이

2020 카카오 블라인드 코테.

1. `key`의 각 90도, 180도, 270도 회전한 배열을 구한 뒤, 각 배열에서 1인 좌표를 찾는다.
2. `lock`의 배열에서 0인 좌표를 구한다.
3. 왼쪽 좌상단부터 오른쪽 우하단까지 평행이동하며 `key`를 회전한 1인 좌표와 `lock`배열의 0인 좌표들을 비교하여 같은 경우 `true`

평행이동할 때 주의해야할 것은 lock 배열을 벗어나는 부분 모두 탐색해야하므로 범위가 `-m`부터 `m`까지된다.

```js
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
        // key의 우측 일부분이 lock에 해당되는 경우도 있을 수 있으므로
        // -m부터 m까지 탐색한다
        for (let y = -m; y < m; y += 1) {
            for (let x = -m; x < m; x += 1) {
                const temp = [];
                for (let [kx, ky] of k) {
                    const dx = kx + x, dy = ky + y;
                    // 배열을 벗어나지 않는 좌표라면
                    if (dx < m && dy < m && dx >= 0 && dy >= 0) {
                        temp.push([dx, dy]);
                    }
                }
                // 두 길이가 같다면 가능성이 있다
                if (temp.length === lockPos.length) {
                    // 모든 좌표가 일치하는 경우
                    const res = lockPos.every(([x, y], i) => x === temp[i][0] && y === temp[i][1]);
                    if (res) return true;
                }
            }
        }
    }
    return false;
}
```