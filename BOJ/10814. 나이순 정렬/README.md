---
문제번호: 10814
문제이름: '나이순 정렬'
주소: 'https://www.acmicpc.net/problem/10814'
분류: ['정렬']
---

# 풀이

## 첫 번째 풀이

ES10에서는 stable sort가 도입됐지만 아직까지 대부분의 JS런타임에서는 unstable sort이다. 그래서 머지 소트를 구현해서 풀이
472ms

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const data = input.slice(1).map(d => {
    const [age, name] = d.split(' ');
    return [+age, name];
});

const merge = (left, right) => {
    const res = [];
    let leftPtr = 0, rightPtr = 0;

    while (left.length > leftPtr && right.length > rightPtr) {
        if (left[leftPtr][0] <= right[rightPtr][0]) {
            res.push(left[leftPtr]);
            leftPtr += 1;
        }
        else {
            res.push(right[rightPtr]);
            rightPtr += 1;
        }
    }

    while (left.length > leftPtr) {
        res.push(left[leftPtr]);
        leftPtr += 1;
    }

    while (right.length > rightPtr) {
        res.push(right[rightPtr]);
        rightPtr += 1;
    }

    return res;
};

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2)
        , left = arr.slice(0, mid)
        , right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
};

const sorted = mergeSort(data).map(d => d.join(' ')).join('\n');
console.log(sorted);
```

## 두 번째 풀이

`parseInt()`나 `parseFloat()`을 이용해서 숫자만 가져오고 이를 비교하는 방법
344ms

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
input.sort((a, b) => parseInt(a) - parseInt(b));
console.log(input.join('\n'));
```

## 세 번째 풀이

`n`이 100,000으로 크지 않기 때문에 배열에 연결리스트 형태로 담아서 출력하는 방법
288ms

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const res = Array.from(Array(201), () => '');
for (let i = 1; i <= +input[0]; i += 1) {
    const [age, name] = input[i].split(' ');
    res[age] += input[i] + '\n';
}
console.log(res.join(''));
```

```c++
#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n;
    cin >> n;
    vector<string> list[201];
    string res = "";

    while (n--) {
        int age;
        string name;
        cin >> age >> name;
        list[age].push_back(name);
    }

    for (int i = 0; i < 201; i += 1) {
        for (string s: list[i]) {
            res += to_string(i) + ' ' + s + '\n';
        }
    }

    cout << res;

    return 0;
}
```