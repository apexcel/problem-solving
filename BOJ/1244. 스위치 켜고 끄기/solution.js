const [n, data, m, ...info] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const len = +n;
let bin = data.split(' ').join('');

const male = (bin, pos) => {
    bin = bin.split('');

    for (let i = pos - 1; i < len; i += pos) {
        bin[i] ^= 1;
    }

    return bin.join('');
}

const female = (bin, pos) => {
    bin = bin.split('');
    pos -= 1;
    bin[pos] ^= 1;

    for (let i = pos - 1, j = pos + 1; i >= 0 && j < len; i -= 1, j += 1) {
        if (bin[i] !== bin[j]) break;
        bin[i] ^= 1;
        bin[j] ^= 1;
    }

    return bin.join('');
}

for (let i = 0; i < +m; i += 1) {
    const [type, pos] = info[i].split(' ');
    bin = (+type === 1) ? male(bin, +pos) : female(bin, +pos);
}

for (let i = 0; i < len; i += 20) {
    console.log(bin.substring(i, i + 20).split('').join(' '));
}