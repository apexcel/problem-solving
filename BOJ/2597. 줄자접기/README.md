---
문제번호: 2597
문제이름: '줄자접기'
주소: 'https://www.acmicpc.net/problem/2597'
분류: ['구현']
---

# 풀이

10분컷 할 줄 알았는데 오래 걸린 문제.

```js
const [len, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const pairs = data.map(d => d.split(' ').map(Number));

/**
 * 
 * @param {number} end 줄자의 길이 
 * @param {number[][]} pairs 값의 쌍이 담긴 배열
 */
const solution = (end, pairs) => {
    // 줄자의 시작점과 중간 지점
    let begin = 0, half = 0;
    const { abs } = Math;

    const fold = (left, right) => {
        if (left === right) return;
        half = (left + right) / 2;

        // 중간 지점을 기준으로 좌측 길이와 우측 길이를 구한다.
        const leftSide = half, rightSide = abs(abs(end - begin) - half);
        // 접은 뒤 길이를 누적 시킴
        begin += half;
        // 좌측 부분만 접을 것이므로 좌측 길이가 우측 길이보다 긴 경우
        // 초과분만큼 종료 지점 길이가 늘어난다
        if (leftSide > rightSide) {
            end += abs(rightSide - leftSide);
        }

        // 줄자를 접었으므로 접은 곳을 기준으로 (접은 곳이 줄자의 시작 지점이 되는 것)
        // 기존에 있는 다른 좌표들을 그 만큼 평행이동
        for (let pair of pairs) {
            [pair[0], pair[1]] = [abs(pair[0] - half), abs(pair[1] - half)]
        }
    }

    pairs.forEach(([a, b]) => fold(a, b));

    console.log((end - begin).toFixed(1));
}

solution(+len, pairs);
```