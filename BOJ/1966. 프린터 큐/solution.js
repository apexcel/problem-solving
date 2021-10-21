const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let res = '';
for (let i = 1; i <= input.length - 1; i += 2) {
    const target = +input[i].split(' ')[1];
    const papers = input[i + 1].split(' ').map((v, i) => [i, v]);
    const order = papers.slice(0).sort((a, b) => b[1] - a[1]);
    let p = 0;

    while (papers.length) {
        const front = papers.shift();
        if (order[p][1] === front[1]) {
            if (front[0] === target) {
                res += `${p + 1}\n`;
                break;
            }
            p += 1;
        }
        else {
            papers.push(front);
        }
    }
}
console.log(res);