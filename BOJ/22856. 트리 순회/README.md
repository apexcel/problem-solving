---
문제번호: 22856
문제이름: '트리 순회'
주소: 'https://www.acmicpc.net/problem/22856'
분류: ['구현', '그래프 이론', '그래프 탐색', '트리']
---

# 풀이

2 * 전체 간선 - 우측 간선의 개수로 풀이하였다.

## 첫 번째 풀이

`StackSizeExceeded`에러 발생

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const len = +input[0];
const nodes = input.slice(1).map(v => v.split(' ').map(Number));

function makeTree() {
    const tree = {}, parents = {};
    nodes.forEach(([parent, left, right]) => {
        tree[parent] = { left, right }
        parents[left] = parent;
        parents[right] = parent;
    });
    return { tree, parents };
}

function findLastNode(root) {
    let ret;
    const inorder = node => {
        if (node === -1) return;
        ret = node;
        if (tree[node].left) inorder(tree[node].left);
        if (tree[node].right) inorder(tree[node].right);
    }
    inorder(root);
    return ret;
}

function inorderAlike() {
    let cnt = 0;
    for (let node = 1; node <= len; node += 1) {
        if (tree[node].left !== -1) cnt += 1;
        if (tree[node].right !== -1) cnt += 1;
    }
    return cnt;
}

const { tree, parents } = makeTree();
let lastNode = findLastNode(1), leftSideEdge = 0;

while (parents[lastNode]) {
    lastNode = parents[lastNode];
    leftSideEdge += 1;
}

console.log(inorderAlike() * 2 - leftSideEdge);
```

## 두 번째 풀이

JS로 풀 때 재귀로 풀면 콜스택 터져서 못 푼다. 따라서 스택과 반복문을 이용해서 중위순회를 구현하는 것이 핵심이었다.

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.slice(1).map(v => v.split(' ').map(Number));

function genTreeAndParents(nodes) {
    const tree = {}, leftSide = {}, rightSide = {};
    nodes.forEach(([parent, left, right]) => {
        tree[parent] = { left, right }; // 트리
        if (left > -1) leftSide[left] = parent; // 좌측 간선들의 부모 집합
        if (right > -1) rightSide[right] = parent; // 우측 간선들의 부모 집합 
    });
    return { tree, leftSide, rightSide };
}

function inorder(tree, root) {
    const stk = [root];
    let cnt = 0, lastNode = root, top;
    let node = tree[root].left

    while (node) {
        while (tree[node]) { // 트리에 노드가 존재하는 경우
            stk.push(node); // 스택에 해당 노드를 삽입
            cnt += 1; // 노드를 방문했으므로 카운터 1 증가
            node = tree[node].left; // 다음 노드는 현재 노드의 좌측 노드
        }
        if (!stk.length) break; // 만약 스택이 비어있다면 종료
        top = stk.pop(); // 부모 노드
        cnt += 1; // 다시 부모 노드로 돌아왔으므로 카운터 1 증가
        if (top > -1) lastNode = top; // 부모 노드가 리프 노드가 아닐 경우
        node = tree[top].right; // 다음 노드는 부모 노드의 우측 노드
    }
    return { lastNode, cnt: cnt - 1 };
}

function solution(nodes) {
    const { tree, leftSide, rightSide } = genTreeAndParents(nodes);
    let { lastNode, cnt } = inorder(tree, 1), rightSideEgde = 0;
    while (rightSide[lastNode]) { // 현재 노드의 부모가 우측 간선들의 부모 집합에 존재하는 경우
        lastNode = rightSide[lastNode]; // 현재 노드를 부모 노드로 변경
        rightSideEgde += 1; // 간선 카운터 1 증가
    }
    return cnt - rightSideEgde; // 전체 간선 개수에서 우측 간선 개수를 빼준다.
}

console.log(solution(arr));
```