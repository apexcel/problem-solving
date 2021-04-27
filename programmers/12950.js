// https://programmers.co.kr/learn/courses/30/lessons/12950

const solution = (A, B) => A.map((v, i) => v.map((e, j) => e + B[i][j]));

console.log(solution([[1,2],[2,3]], [[3,4],[5,6]]))