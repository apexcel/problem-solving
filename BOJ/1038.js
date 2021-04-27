// const sc = require('fs').readFileSync('/dev/stdin').toString();
const solution = (n) => {
    const fulfill = (s) => {
        const array = [];
        for (let i = s; i < 10; i += 1) {
            array[i] = '' + i;
        }
        return array;
    };

    let numbers0 = fulfill(0), numbers1 = fulfill(1)
    let total = fulfill(0);

    let temp = [];
    for (let i = 0; i < 10; i += 1) {
        for (let j = 0; j < numbers1.length; j += 1) {
            for (let k = 0; k < numbers0.length; k += 1) {
                if (Number(numbers1[j]) > Number(numbers0[k][0])) {
                    temp.push('' + numbers1[j] + numbers0[k]);
                }
            }
        }
        total.push(...temp);
        numbers0 = temp;
        numbers1 = numbers1.slice(1);
        temp = [];
    }

    console.log(n < total.length ? total[n] : -1);
};

// solution(Number(sc));

const solution2 = (n) => {
    const q = [];
    const total = [];
    let index = 10;

    for (let i = 0; i <= 9; i += 1) {
        q.push(i);
        total[i] = i;
    }

    while (q.length) {
        const num = q.shift();
        const last = num % 10;
        for (let i = 0; i < last; i += 1) {
            q.push(num * 10 + i);
            total[index++] = num * 10 + i;
        }
    }
    console.log(n < index ? total[n] : -1);
};
solution2(10)
// solution2(Number(sc));