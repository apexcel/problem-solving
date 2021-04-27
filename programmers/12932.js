// https://programmers.co.kr/learn/courses/30/lessons/12932

const solution = n => (""+n).split('').map(v => +v).reverse();

const solution2 = n => {
    let q = n, r = [];
    for (let i = 0; q > 0; i++) {
        r.push(q % 10);
        q = Math.floor(q / 10);
    }
};