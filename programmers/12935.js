// https://programmers.co.kr/learn/courses/30/lessons/12935

const solution = A => A[1] ? A = A.filter(v => v !== Math.min(...A)) : [-1];

console.log(solution([10]))