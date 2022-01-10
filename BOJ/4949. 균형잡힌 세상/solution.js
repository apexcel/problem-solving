const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const solution = line => {
    const table = {
        '(': 1,
        '[': 2,
        ')': -1,
        ']': -2,
    };
    const stack = [];

    for (let i = 0; i < line.length; i += 1) {
        const cur = table[line[i]];
        if (cur) {
            if (cur > 0) stack.push(cur);
            else if (stack.length === 0 || stack.pop() + cur !== 0) return false;
        }
    }
    return !stack.length;
};

let res = '';
rl.on('line', line => {
    if (line === '.') {
        console.log(res);
        process.exit();
    }
    res += (solution(line) ? 'yes' : 'no') + '\n';
});