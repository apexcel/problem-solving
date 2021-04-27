// https://programmers.co.kr/learn/courses/30/lessons/70129

let res = [0, 0];
const solution = s => {
    if (s == '1') return res;
    let next = ''
    for (const ch of s) {
        (ch == '0') ? res[1] += 1 : next += '1';
    }
    res[0] += 1;
    return solution((next.length).toString(2))
};