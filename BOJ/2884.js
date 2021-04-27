const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
a = parseInt(input[0]);
b = parseInt(input[1]);

if (b > 45) {
    b -= 45;
}
else {
    b += 15;
    a--;
    if (a < 0) {
        a = 23;
    }
}
console.log(a, b);
