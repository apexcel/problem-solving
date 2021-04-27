// https://programmers.co.kr/learn/courses/30/lessons/68935

const solution = n => parseInt((n.toString(3)).split('').reverse().join(''), 3);

solution(45)
solution(125)