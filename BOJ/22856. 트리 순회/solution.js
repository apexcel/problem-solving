const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.slice(1).map(v => v.split(' ').map(Number));

function genTreeAndParents(nodes) {
    const tree = {}, leftSide = {}, rightSide = {};
    nodes.forEach(([parent, left, right]) => {
        tree[parent] = { left, right };
        if (left > -1) leftSide[left] = parent;
        if (right > -1) rightSide[right] = parent;
    });
    return { tree, leftSide, rightSide };
}

function inorder(tree, root) {
    const stk = [root];
    let cnt = 0, lastNode = root, top;
    let node = tree[root].left;

    while (node) {
        while (tree[node]) {
            stk.push(node);
            cnt += 1;
            node = tree[node].left;
        }
        if (!stk.length) break;
        top = stk.pop();
        cnt += 1;
        if (top > -1) lastNode = top;
        node = tree[top].right;
    }
    return { lastNode, cnt: cnt - 1 };
}

function solution(nodes) {
    const { tree, leftSide, rightSide } = genTreeAndParents(nodes);
    let { lastNode, cnt } = inorder(tree, 1), rightSideEgde = 0;
    while (rightSide[lastNode]) {
        lastNode = rightSide[lastNode];
        rightSideEgde += 1;
    }
    return cnt - rightSideEgde;
}

console.log(solution(arr));