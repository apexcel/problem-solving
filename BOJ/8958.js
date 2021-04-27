const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
for (let i = 1; i <= parseInt(input[0]); i += 1) {
    let sum = 0;
    let cnt = 0;
    for (let j = 0; j <= input[i].length; j += 1) {
        input[i].charAt(j).toUpperCase() === 'O' ? cnt += 1 : cnt = 0;
        sum += cnt;
    }
    console.log(sum);
}
