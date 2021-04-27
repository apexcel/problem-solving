// https://programmers.co.kr/learn/courses/30/lessons/12928

const solution = n => {
    let ret = 0;
    for (let i = 1; i <= n; i++) {
        n % i === 0 ? ret += i : ret;
    }
    return ret;
};