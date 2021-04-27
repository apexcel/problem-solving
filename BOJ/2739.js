const fs = require('fs');
const input = fs.readFileSync('/dev/stdin');
for (let i = 1; i <= 9; i += 1) {
    console.log(`${input} * ${i} = ${input * i}`);
}