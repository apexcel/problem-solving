// https://programmers.co.kr/learn/courses/30/lessons/12931

const solution = n => String(n).split('').map(v => +v).reduce((acc, cur) => acc + cur);