const n = +require('fs').readFileSync('/dev/stdin').toString();
const print = n => {
    if (n === 1) return ['*'];
    const prev = print(n / 3);
    const a = prev.map(s => s.repeat(3));
    const b = prev.map(s => s + ' '.repeat(s.length) + s);

    return [...a, ...b, ...a];
};

console.log(print(n).join('\n'));