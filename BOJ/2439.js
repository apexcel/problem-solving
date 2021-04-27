const input = require('fs').readFileSync('/dev/stdin').toString();
let stars = '';
let blank = '';
for (let i = 0; i < input; i += 1) {
    for (let j = input - 1; j > i; j -= 1) {
        blank += ' ';
    }
    stars += '*';
    console.log(blank + stars)
    blank = '';
}
