---
문제번호: 1025
문제이름: '제곱수 찾기'
주소: 'https://www.acmicpc.net/problem/1025'
분류: ['브루트포스 알고리즘']
---

# 풀이

가로, 세로 그리고 대각선 방향으로 늘어선 수들을 구했을 때 가장 큰 수를 찾으면 된다.

```js
function solution(col, row, matrix) {
    let maxVal = -1;
    for (let y = 0; y < row; y += 1) {
        for (let x = 0; x < col; x += 1) {
            for (let dy = -row; dy < row; dy += 1) { // x의 공차 dx
                for (let dx = -col; dx < col; dx += 1) { // y의 공차 dy
                    if (!dy && !dx) continue; // 공차가 모두 0인 경우 무한루프에 빠지므로

                    let str = '';
                    let py = y, px = x;

                    while (py >= 0 && py < row && px >= 0 && px < col) { // 접근 가능한 인덱스 일 경우에만
                        str += matrix[py][px];
                        if (Number.isInteger(Math.sqrt(+str))) maxVal = Math.max(maxVal, +str);
                        
                        py += dy; // x에 x의 공차만큼 더한다
                        px += dx; // y에 y의 공차만큼 더한다
                    }
                }
            }
        }
    }
    console.log(maxVal);
}
```

0이거나 공차가 음수인 경우에도 찾아야한다. `-row`에서 `row` 그리고 `-col`에서 `col`가 공차를 지정해주는 부분이며 `while`문 내부의 `px`, `py`값을 공차만큼 더해주며 계산을 해준다.