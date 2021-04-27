// https://programmers.co.kr/learn/courses/30/lessons/12943

const solution = (n, cn = 0) => {
    let c = cn;
    if (c > 500) return -1;
    if (n === 1) return c;
    n % 2 ? n = (n * 3)+1 : n /= 2;
    return solution(n, c+1);
};