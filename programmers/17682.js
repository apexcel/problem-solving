// https://programmers.co.kr/learn/courses/30/lessons/17682
const inputs = [
    "1S2D*3T",
    "1D2S#10S",
    "1D2S0T",
    "1S*2T*3S",
    "1D#2S*3S",
    "1T2D3D#",
    "1D2S3T*"
];

const solution = str => {
    let s = str.split(''), i = 0,
    res = [0, 0, 0];

    for (let j = 0; j < s.length; j++) {
        if (!isNaN(s[j] - '0')) {
            if (j !== 0) i++;
            res[i] = parseInt(s[j], 10);
            if (res[i] === 1) {
                if (!isNaN(s[j + 1] - '0')) {
                    res[i] = 10;
                    j += 2;
                }
            }
        }
        if (s[j] === 'S' || s[j] === 'D' || s[j] === 'T') res[i] = pow(res[i], s[j]);

        if (s[j] === '*') {
            if (i > 0) {
                res[i - 1] = res[i - 1] * 2 
            } 
            res[i] = res[i] * 2;
        }

        if (s[j] === '#') res[i] = res[i] * (-1);
    }
    return res.reduce((acc, cur) => acc + cur);
};

const pow = (int, char) => {
    const exp = {S: 1, D: 2, T: 3};
    return Math.pow(int, exp[char]);
}

// for (let i of inputs) {
console.log(solution('10D*2D#3S#'))
// }