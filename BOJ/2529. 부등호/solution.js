const [n, s] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const end = +n + 1;
const signs = s.split(' ');
 
const isCorrectEquation = (picked) => {
    let prev = picked[0];
    for (let i = 1; i < end; i += 1) {
        const sign = signs[i - 1];
        if ((sign === '<' && prev >= picked[i]) || (sign === '>' && prev <= picked[i])) {
            return false;
        }
        prev = picked[i];
    }
    return true;
}

const isVisited = Array(10).fill(0);
const picked = [];
let mn = 9876543210, mx = -1, smin = mn.toString(), smax = '';

// 매 탐색시 대소 관계 비교하면 더 빠를수도?
// TODO: 개선해보기
const pick = (depth) => {
    if (depth === end) {
        if (isCorrectEquation(picked)) {
            const candidate = picked.join('');
            const num = parseInt(candidate);
            if (mn > num) {
                mn = num;
                smin = candidate;
            }
            if (mx < num) {
                mx = num;
                smax = candidate
            }
        }
        return;
    }

    for (let i = 0; i < 10; i += 1) {
        if (!isVisited[i]) {
            isVisited[i] = 1;
            picked.push(i);
            pick(depth + 1);
            picked.pop();
            isVisited[i] = 0;
        }
    }
}

pick(0);
console.log(smax);
console.log(smin);