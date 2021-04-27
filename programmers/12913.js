// https://programmers.co.kr/learn/courses/30/lessons/12913

/*
const solution = land => {
    const second = land.slice(1);
    let list = [];

    for (let i = 0; i < 4; i += 1) {
        list[i] = path(second, i, land[0][i]);
    }
    return Math.max(...list);
};

const path = (land, index, points) => {
    land.forEach(v => {
        let max = v[0], temp = 0;
        v.forEach((e, i) => {
            if (i !== index && e > max) {
                max = e;
                temp = i;
            }
        })
        index = temp;
        points += max;
    })
    return points;
}
*/

const solution = land => {
    for (let i = 1; i < land.length; i += 1) {
        land[i][0] += Math.max(land[i - 1][1], Math.max(land[i - 1][2], land[i - 1][3]));
        land[i][1] += Math.max(land[i - 1][0], Math.max(land[i - 1][2], land[i - 1][3]));
        land[i][2] += Math.max(land[i - 1][0], Math.max(land[i - 1][1], land[i - 1][3]));
        land[i][3] += Math.max(land[i - 1][0], Math.max(land[i - 1][1], land[i - 1][2]));
    }
    console.log(Math.max(...land[land.length - 1]))
    return Math.max(...land[land.length - 1]);
};

solution([[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]])
solution([[4, 3, 2, 1], [5, 6, 7, 8], [1, 2, 3, 5]])