---
문제번호: 1195
문제이름: '킥다운'
주소: 'https://www.acmicpc.net/problem/1195'
분류: ['구현', '브루트포스 알고리즘']
---

# 풀이

처음에는 정규식같은걸로 찾을 수 있다고 생각했는데, 계속 풀어보니 그렇게는 안된다는 것을 깨달음. 둘 중 길이가 긴 것을 기준으로 두고 작을 것을 움직여 가며 맞추어야 하는데 작은 것의 오른쪽 일부분만 맞거나 왼쪽의 일부분만 맞는 경우가 있을 수 있다. 이 경우에는 정규식이나 일반적인 반복문으로 해결할 수 없다.

이를 해결하기 위해 $작은 문자열의 길이 - 1$만큼을 0으로 채워 긴 문자열 양끝에다 붙여줬다. 0인경우에는 아무런 유효성 검사를 하지 않도록해서 원본 문자열의 인덱스를 넘어가는 경우에도 일반적인 반복문으로 일치하는지 알 수잇다.

하나도 맞지 않는 경우 두 문자열의 길이를 이어붙이면 되기때문에 두 문자열의 길이를 합친것을 반환값으로 두고 더 짧은 길이의 문자열이 만들어지면 해당 값으로 갱신한다. 근데 갱신한 값이 긴 길이의 문자열과 같은 것이라면 더 이상 작게 만들 수 없음므로 종료한다.

```js
const [l, s] = require('fs')
	.readFileSync('./data.in')
	.toString()
	.trim()
	.split('\n')
	.sort((a, b) => b.length - a.length);

// 서로 튀어나온 곳인 경우에만 불가능하다
const isPossible = (a, b) => !(a === '2' && b === '2');

// for문 한 번에 순회하기 위해 양끝에 0으로 채워준다.
const padded = '0'.repeat(s.length - 1) + l + '0'.repeat(s.length - 1);
// 하나도 맞지 않는 경우를 기본 값으로 둔다.
let mx = l.length + s.length;

// 첫 번째 인덱스를 기준으로 하므로 오른쪽에 붙은부분의 끝까지 순회할 필요없음
outer: for (let i = 0; i <= padded.length - s.length; i += 1) {
	let tmp = 0;
	for (let j = 0; j < s.length && padded[i + j]; j += 1) {
        // 0이라면 무시
		if (padded[i + j] === '0') continue;
        // 만약 일치하지 않는다면 바로 외부 반복문으로 이동
		if (!isPossible(padded[i + j], s[j])) continue outer;
        // 일치하는 경우 얼마만큼 일치하는지 세어준다
		tmp += 1;
	}
    // 모두 일치한다면 s.length는 tmp와 같다
    // 둘 중 더 작은 값을 반환 값으로 갱신
	mx = Math.min(mx, l.length + s.length - tmp);

    // 긴 문자열의 길이보다 작아질 수 없으므로 반환값이 긴 문자열의 길이와 같으면 종료
	if (mx === l.length) break;
}
console.log(mx);
```
