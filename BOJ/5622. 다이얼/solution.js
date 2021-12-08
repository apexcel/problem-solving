const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
const dial = [
    '',
    '',
    '',
    'ABC',
    'DEF',
    'GHI',
    'JKL',
    'MNO',
    'PQRS',
    'TUV',
    'WXYZ'
];
console.log(input.reduce((acc, cur) => acc + dial.findIndex(v => v.includes(cur)), 0));