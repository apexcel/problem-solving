// https://programmers.co.kr/learn/courses/30/lessons/12910

const solution = (arr, d) => {
    let a = arr.filter(v => !(v % d));
    return a.length > 0 ? a.sort((a, b) => a - b) : [-1];
};