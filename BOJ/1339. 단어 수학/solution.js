const [n, ...words] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const table = Array(26).fill(0);

const toIdx = ch => ch.charCodeAt(0) - 65;

words.forEach(word => {
    for (let i = 0; i < word.length; i += 1) {
        table[toIdx(word[i])] += 10 ** (word.length - 1 - i);
    }
});
table.sort((a, b) => b - a);

let num = 9, sum = 0;
for (let t of table) {
    if (t === 0) break;
    sum += t * num;
    num -= 1;
}

console.log(sum);