// https://programmers.co.kr/learn/courses/30/lessons/67257

const calculate = (array, operator) => {
    array = array.map(v => parseInt(v, 10));
    if (operator === '*') {
        return array.reduce((acc, cur) => acc * cur);
    }
    else if (operator === '+') {
        return array.reduce((acc, cur) => acc + cur);
    }
    else {
        return array.reduce((acc, cur) => acc - cur);
    }
};

const solution = expression => {

    const cycle = [
        '*+-',
        '*-+',
        '+*-',
        '+-*',
        '-*+',
        '-+*',
    ];

    let max = 0;
    for (let i = 0; i < 6; i += 1) {
        const op = cycle[i];
        const value = calculate(expression.split(op[2]).map(v => calculate(v.split(op[1]).map(k => calculate(k.split(op[0]), op[0])), op[1])), op[2]);
        if (Math.abs(value) > max) max = Math.abs(value);
    }
    console.log(max)
    return max;
};

solution("100-200*300-500+20")