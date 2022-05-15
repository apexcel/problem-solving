---
문제번호: 10819
문제이름: '차이를 최대로'
주소: 'https://www.acmicpc.net/problem/10819'
분류: ['브루트포스 알고리즘', '백트랙킹']
---

# 풀이

`[..., min2, max1, min1, max2, ...]` 형태로 넣어주면 된다. n이 홀수인 경우 양쪽 끝과 비교하여 더 큰 쪽에 넣어준다.

```js
const [n, data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const size = parseInt(n), half = size >> 1;
const nums = data.split(' ').map(Number).sort((a, b) => a - b);
const { abs } = Math;

const sum = arr => {
    let ret = 0;
    for (let i = 1; i < arr.length; i += 1) {
        ret += abs(arr[i - 1] - arr[i]);
    }
    return ret;
}

let res = [];
for (let i = 0; i < half; i += 1) {
    const left = nums[i], right = nums[nums.length - 1 - i];
    // 이터레이션이 홀수 번째라면 큰 수를 앞에 작은 수를 뒤에
    if (i % 2) {
        res.unshift(right);
        res.push(left);
    }
    // 이터레이션이 짝수 번째라면 작은 수를 앞에 큰 수를 뒤에
    else {
        res.unshift(left);
        res.push(right);
    }
}

// 원본 배열 크기가 홀수라면
if (size % 2) {
    // 양 끝과 비교하여 차이가 더 큰 쪽으로 넣는다. 같다면 상관 없음.
    const begin = res[0], mid = nums[half], end = res.at(-1);
    abs(begin - mid) > abs(end - mid)
        ? res.unshift(mid)
        : res.push(mid);
}

console.log(sum(res));
```