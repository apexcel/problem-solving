const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (nx, ny, w, axisX, axisY) => {
    const isMowed = (n, axis, w, limit) => {
        let half = w / 2, expected = axis[0] + half;
        for (let i = 1; i < n; i += 1) {
            if (expected + half < axis[i]) return false;
            expected = axis[i] + half;
        }
        return expected >= limit;
    };

    return isMowed(nx, axisX, w, 75) && isMowed(ny, axisY, w, 100) ? 'YES' : 'NO';
}

for (let i = 0; i < input.length; i += 3) {
    const [nx, ny, w] = input[i].split(' ').map(Number);
    if (nx === 0) process.exit();
    const axisX = input[i + 1].split(' ').map(Number).sort((a, b) => a - b);
    const axisY = input[i + 2].split(' ').map(Number).sort((a, b) => a - b);
    console.log(solution(nx, ny, w, axisX, axisY));
}

