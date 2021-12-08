const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let str = '';
for (let i = 1; i < input.length; i += 1) {
    const [rx, ry, n] = input[i].split(' ');
    const floor = n % rx;
    const room = '' + Math.ceil(n / rx);
    str += `${floor ? floor : rx}${room.length === 1 ? '0' + room : room}\n`;
}
console.log(str);