// https://programmers.co.kr/learn/courses/30/lessons/12930

const solution = s => s.split(' ').map((v, i) => v.split('').map((e, j) => j % 2 ? e.toLowerCase() : e.toUpperCase()).join('')).join(' ');