---
문제번호: 2930
문제이름: '가위 바위 보'
주소: 'https://www.acmicpc.net/problem/2930'
분류: ['구현', '그리디 알고리즘', '브루트포스 알고리즘']
---

# 풀이

가위바위보는 승패가 명확하게 갈리고 그 크기가 작으므로 모듈로 연산을 통해서 구현할 수 있다. 근데 이거 브론즈 문제 맞나 어렵다

```js
const [r, p, n, ...e] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (round, player, enemies) => {
    const table = { 'R': 0, 'S': 1, 'P': 2 };
    let score = 0, maxScore = 0;

    for (let i = 0; i < round; i += 1) {
        // 각각의 인덱스는 RSP의 점수를 저장
        const rsp = [0, 0, 0];

        for (let j = 0; j < enemies.length; j += 1) {
            // RSP 값은 내가 낸 가위바위보이며 RSP + 1의 값은 내가 이길 수 있는 가위바위보 이므로
            // 값이 같다는 것은 승부에서 이겼다는 뜻
            if ((table[player[i]] + 1) % 3 === table[enemies[j][i]]) score += 2;
            // 비긴 경우
            else if (player[i] === enemies[j][i]) score += 1; 

            // 완전 탐색
            for (let k = 0; k < 3; k += 1) {
                // RSP 3가지 경우를 돌면서 이긴 경우 및 비긴 경우의 점수를 rsp 배열에 저장
                if ((k + 1) % 3 === table[enemies[j][i]]) rsp[k] += 2;
                else if (k === table[enemies[j][i]]) rsp[k] += 1;
            }
        }
        // 해당 라운드에서 최고 점수를 더한다
        maxScore += Math.max(...rsp);
    }
    console.log(score);
    console.log(maxScore);
}

solution(+r, p, e);
```