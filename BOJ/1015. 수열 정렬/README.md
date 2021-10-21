---
문제번호: 1015
문제이름: '수열 정렬'
주소: 'https://www.acmicpc.net/problem/1015'
분류: ['정렬']
---

# 풀이

## 첫 번째 풀이 (124ms)

문제에서 요구하는대로 구현했다.

```js
console.log(
    input[1].split(' ')
    .map((v, i) => ({ idx: i, val: +v }))
    .sort((a, b) => a.val - b.val || a.idx - b.idx)
    .reduce((acc, cur, i) => {
        acc[cur.idx] = i;
        return acc;
    }, [])
    .join(' ')
);
```

값과 인덱스 쌍의 형태로 만들고 값을 기준으로 정렬한 뒤 같은 경우 인덱스 기준으로 정렬하도록 했다.

## 두 번째 풀이 (116ms)

```c++
const int MAX_LEN = 50;

int main() {
    int t, a[MAX_LEN] = {0, }, b[MAX_LEN] = {0, };
    scanf("%d", &t);

    for (int i = 0; i < t; i += 1) {
        scanf("%d", a + i);
        for (int j = 0; j < i; j += 1) {
            a[j] > a[i] ? b[j]++ : b[i]++;
        }
    }

    for (int i = 0; i < t; i += 1) printf("%d ", b[i]);

    return 0;
}
```

배열 A는 입력으로 주어진 값들을 담는다. 입력이 주어질 때 마다 이전에 입력 받은 값들과 비교하여 이전 값이 더 크다면 이전 값의 인덱스 카운터를 증가시키고 입력 받은 현재 값이 크다면 현재 입력 값의 인덱스 카운터를 증가시키는 것이다. 따라서 카운터가 작을수록 값의 크기가 작다는 결과가 나온다.

```js
const s = input[1].split(' ');
const a = Array(s.length).fill(0), b = Array(s.length).fill(0);

for (let i = 0; i < s.length; i += 1) {
    a[i] = +s[i];
    for (let j = 0; j < i; j += 1) {
        a[j] > a[i] ? b[j]++ : b[i]++;
    }
}

console.log(b.join(' '));
```

C++로 풀이한 것을 보고 다시 작성했다. 깔끔하고 속도도 약간 더 빠르다.