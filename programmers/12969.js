// https://programmers.co.kr/learn/courses/30/lessons/12969

const stars = (a, b) => Array.from(new Array(b), () => Array(a).fill('*').join('')).join('\n');

console.log(stars(5, 3))