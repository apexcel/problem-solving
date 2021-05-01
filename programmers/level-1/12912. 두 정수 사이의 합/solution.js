// https://programmers.co.kr/learn/courses/30/lessons/12912

const solution = (a, b) => {
    let m = Math.max(a, b), n = m === a ? b : a, ret = 0;
    for (; n <= m; n++) ret += n;
    return ret;
};

// better way
const add = (a, b) => a + b * (Math.abs(b - a)+1) / 2;