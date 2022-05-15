const calc = (k, dungeons) => {
    let cnt = 0;
    for (let [need, use] of dungeons) {
        if (k >= need) {
            k -= use;
            cnt += 1;
        }
        else break;
    }
    return cnt;
}

const solution = (k, dungeons) => {
    const picked = [], isVisited = Array(dungeons.length).fill(0);
    let mx = 0;

    const pick = (depth) => {
        const v = calc(k, picked);
        if (v > mx) mx = v;

        if (depth === dungeons.length) return;

        for (let i = 0; i < dungeons.length; i += 1) {
            if (!isVisited[i]) {
                isVisited[i] = 1;
                picked.push(dungeons[i]);
                pick(depth + 1);
                picked.pop();
                isVisited[i] = 0;
            }
        }
    }

    pick(0);
    console.log(mx);
}

solution(80, [[80, 20], [50, 40], [30, 10]])