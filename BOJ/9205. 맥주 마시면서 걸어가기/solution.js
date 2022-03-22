const [tc, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const distance = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);

const preprocess = () => {
    const ret = [];
    for (let i = 0; i < data.length; i += 1) {
        const range = parseInt(data[i]) + 2;
        const mapped = data.slice(i + 1, i + range + 1).map(d => d.split(' ').map(Number));
        const matrix = Array.from(Array(range), () => []);

        for (let j = 0; j < range; j += 1) {
            for (let k = 0; k < range; k += 1) {
                matrix[j][k] = distance(mapped[j], mapped[k]);
            }
        }
        ret.push({ range, matrix });
        i += range;
    }
    return ret;
}

const solution = (item) => {
    const { range, matrix } = item;
    for (let k = 0; k < range; k += 1) {
        for (let i = 0; i < range; i += 1) {
            for (let j = 0; j < range; j += 1) {
                if (matrix[i][k] <= 1000 && matrix[k][j] <= 1000) {
                    matrix[i][j] = 0;
                }
            }
        }
        if (!matrix[0].at(-1)) {
            console.log('happy');
            return;
        }
    }
    console.log('sad');
}

preprocess().forEach(solution);