// https://programmers.co.kr/learn/courses/30/lessons/12922

const solution = n => Array(n).fill(0).map((v, i) => i % 2 ? '박' : '수').join('');

// better way

// return ("수박").repeat(n/2) + ((n%2) ? '수' : '');