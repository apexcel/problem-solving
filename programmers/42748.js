// https://programmers.co.kr/learn/courses/30/lessons/42748
const con = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
const arr = [1, 5, 2, 6, 3, 7, 4]

const solution = (a, c) => c.map(e => a.slice(e[0]-1, e[1]).sort((a, b) => a - b)[e[2]-1])

console.log(solution(arr, con))