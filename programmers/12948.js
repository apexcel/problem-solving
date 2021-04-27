// https://programmers.co.kr/learn/courses/30/lessons/12948

const solution = (s) => s.replace(/\d(?=\d{4})/g, '*');

console.log(solution('0103232324442224'))