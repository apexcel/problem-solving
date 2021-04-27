// https://programmers.co.kr/learn/courses/30/lessons/42839

let t = []
let p = [];

const dfs = (depth, n, len, isVisited) => {
    if (depth === len) {
        return;
    }
    for (let i = 0; i < len; i += 1) {
        if (!isVisited[i]) {
            isVisited[i] = true;
            t.push(n[i]);
            p.push(t.join(''));
            dfs(depth + 1, n, len, isVisited);
            t.pop();
            isVisited[i] = false;
        }
    }
}

const solution = numbers => {
    const nums = numbers.split('');
    const len = nums.length;
    let isVisited = Array(len + 1).fill(false);

    dfs(0, nums, len, isVisited)
    const possibles = [...new Set(p.map(v => parseInt(v, 10)))].filter(v => isPrime(v))
    // console.log(possibles)
    return possibles.length;
};

const isPrime = n => {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i += 1) {
        if (!(n % i)) {
            return false;
        }
    }
    return true;
}

solution('17')
// solution('011')
// solution('567')