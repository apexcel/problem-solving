// https://programmers.co.kr/learn/courses/30/lessons/49994

const solution = dir => {
    const mat = Array.from(Array(11), () => Array(11).fill(0));
    const path = {};
    const move = {
        'D': [0, 1],
        'U': [0, -1],
        'L': [-1, 0],
        'R': [1, 0]
    };
    let px = 5, py = 5;
    mat[py][px] = 1;

    for (let i = 0; i < dir.length; i += 1) {
        const m = dir[i];
        if (px <= 0 && m === 'L' || px >= 10 && m === 'R' || py <= 0 && m === 'U' || py >= 10 && m === 'D') continue;

        const [dx, dy] = [px, py];
        const [x, y] = move[m];
        py += y;
        px += x;
        mat[py][px] = 1;
        path[`${dx}${dy}${px}${py}`] = 1;
        path[`${px}${py}${dx}${dy}`] = 1;
    }
    // console.table(mat)
    console.log(Object.keys(path).length / 2);
    return Object.keys(path).length / 2;
};

solution('ULURRDLLU')
solution('LULLLLLLU')
solution('UDU')