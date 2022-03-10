---
문제번호: 2622
문제이름: '삼각형만들기'
주소: 'https://www.acmicpc.net/problem/2622'
분류: ['수학', '조합론']
---

# 풀이

## 첫 번째 풀이

삼각형의 조건 중 세 변의 길이가 주어질 때, "가장 긴 변의 길이가 다른 두 변의 합 보다 작아야 한다"가 성립해야 삼각형이다. $c >= b >= a$로 두어서 중복을 방지한다.

```js
const n = +require('fs').readFileSync('/dev/stdin').toString();
let cnt = 0;
for (let a = 1; a < n; a += 1) {
    for (let b = a; b < n; b += 1) {
        const c = n - (a + b); // 가장 긴 변
        if (c < b) break; // 중복 방지
        if (c < a + b) cnt += 1;
    }
}
console.log(cnt);
```

## 두 번째 풀이

다른 사람 풀이 참고.
성냥깨비의 수가 $n \in Z^+$일 때 세 변을 각 $a, b, c$라 하자.

$a, b, c \in Z^+ \text {such that } 0 \leq a \leq b \leq c \wedge a + b + c = n$

세 변이 삼각형을 이루려면 다음을 만족해야 한다.

$a + b > c$

위 조건들로 부터 가능한 $c$의 범위를 구할 수 있다.

$a \leq c$
$\Rightarrow a + b \leq 2c$
$\Rightarrow a + b + c \leq 3c$
$\Rightarrow n \leq 3c$

$a + b > c$
$\Rightarrow a + b + c > 2c$
$\Rightarrow n > 2c$

$\therefore \frac{n}{3} \leq c \leq \frac{n}{2}$

각 $c$에 대해 가능한 $b$의 범위도 구할 수 있으며 $b$가 결정되면 $a$도 결정된다.

$a \leq b \leq c$
$\Rightarrow a = n - b - c \leq b \leq c$
$\Rightarrow \frac{n-c}{2} \leq b \leq c$

```js
const n = +require('fs').readFileSync('/dev/stdin').toString();
let cnt = 0;
for (let c = 1; c <= n; c += 1) {
    if (n <= 3 * c && 2 * c < n) cnt += c - Math.floor((n - c - 1) / 2);
}
console.log(cnt)
```