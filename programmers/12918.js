// https://programmers.co.kr/learn/courses/30/lessons/12918

const solution = (s) => s.length === s.split('').filter(v => v - '0' >= 0).length && (s.length === 4 || s.length === 6);

console.log(solution('1234'))
console.log(solution('0000'))
console.log(solution('aaaa'))
