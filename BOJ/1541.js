const sc = require('fs').readFileSync('/dev/stdin').toString().trim();

const solution = str => {
    str += '/';
    let sum = 0, num = '';
    let isNeg = false;
    for (let ch of str) {
        if (!isNaN(ch)) {
            num += ch;
        }
        else {
            if (ch === '+' || ch === '-' || ch === '/') {
                sum += parseInt((num = isNeg ? '-' + num : num) , 10);
                if (ch === '-') {
                    isNeg = true;
                }
            }
            num = '';
        }
    }
    console.log(sum);
}

solution(sc);