---
문제번호: 2641
문제이름: '다각형그리기'
주소: 'https://www.acmicpc.net/problem/2641'
분류: ['구현']
---

# 풀이

## 첫 번째 풀이

배열 사이즈가 별로 크지 않기 때문에 직접 그린다음 비교하는 방법

```js
const [n, origin, m, ...targets] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const SIZE = 101, CENTER = Math.floor(SIZE / 2);

const dir = [
    [0, 0],
    [1, 0],
    [0, -1],
    [-1, 0],
    [0, 1],
];

const draw = (move) => {
    const mat = Array.from(Array(SIZE), () => Array(SIZE).fill(0));
    let top = SIZE, left = SIZE, bottom = 0, right = 0;
    let y = CENTER, x = CENTER;

    for (let m of move) {
        const [dx, dy] = dir[m];
        x += dx, y += dy;

        if (y < top) top = y;
        if (y > bottom) bottom = y;
        if (x < left) left = x;
        if (x > right) right = x;

        mat[y][x] = 1;
    }

    let shape = '';
    for (let y = top; y <= bottom; y += 1) {
        for (let x = left; x <= right; x += 1) {
            shape += mat[y][x];
        }
        shape += '\n';
    }
    return shape;
}

const solution = () => {
    const o = origin.split(' ').map(Number);
    const t = targets.map(target => target.split(' ').map(Number));
    const base = draw(o);

    const ret = t.filter(v => draw(v) === base);
    console.log(ret.length);
    console.log(ret.map(r => r.join(' ')).join('\n'));
}

solution();
```

## 두 번째 풀이

모양 수열을 그릴 수 있는 가능한 모든 경우를 미리 목록화 시켜둔 뒤 목록에 해당하는 지 찾는 방법. 같은 모양이라면 어느 점에서 출발해도 모양 수열에 존재하는 수는 순서는 달라져도 같다. 예를 들어 한 변이 1인 정 사각형은 `1 4 3 2`, `4 3 2 1`, `3 2 1 4`, `2 1 4 3` 처럼 나타낼 수 있다. 따라서 가능한 모든 모양을 찾으면 된다.

정방향으로 그리는 경우와 역방향으로 그리는 경우 찾는데, 주의할 것은 역방향의 경우 모양 수열의 순서도 뒤집어주어야 한다. 대칭형인 경우에는 방향만 바꾸면 되지만 대칭이 아닌 모양의 경우 다르게 그려지게 된다.

```js
const [n, origin, m, ...targets] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const catalog = (directions) => {
    const move = directions.split(' ')
    // 그리는 순서 뒤집기
    const reversed = move.slice().reverse().map(v => {
        // 그리는 방향 뒤집기
        switch (v) {
            case '1': return '3';
            case '2': return '4';
            case '3': return '1';
            default: return '2';
        }
    });
    const table = [directions, reversed.join(' ')];

    for (let i = 1; i < move.length; i += 1) {
        table.push([...move.slice(i), ...move.slice(0, i)].join(' '));
    }
    for (let i = 1; i < reversed.length; i += 1) {
        table.push([...reversed.slice(i), ...reversed.slice(0, i)].join(' '));
    }
    
    return table;
}
const list = catalog(origin);
const filtered = targets.filter(t => list.includes(t));
console.log(filtered.length);
console.log(filtered.join('\n'));

```