const [r, p, n, ...e] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (round, player, enemies) => {
    const table = { 'R': 0, 'S': 1, 'P': 2 };
    let score = 0, maxScore = 0;

    for (let i = 0; i < round; i += 1) {
        const rsp = [0, 0, 0];

        for (let j = 0; j < enemies.length; j += 1) {
            if ((table[player[i]] + 1) % 3 === table[enemies[j][i]]) score += 2;
            else if (player[i] === enemies[j][i]) score += 1;

            for (let k = 0; k < 3; k += 1) {
                if ((k + 1) % 3 === table[enemies[j][i]]) rsp[k] += 2;
                else if (k === table[enemies[j][i]]) rsp[k] += 1;
            }
        }
        maxScore += Math.max(...rsp);
    }
    console.log(score);
    console.log(maxScore);
}

solution(+r, p, e);