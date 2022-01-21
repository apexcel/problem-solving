const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const notes = '_cdefgabC';
let melody = '';
for (let i = 0; i < input.length; i += 1) melody += notes[input[i]];
console.log(melody === 'cdefgabC' ? 'ascending' : melody === 'Cbagfedc' ? 'descending' : 'mixed');