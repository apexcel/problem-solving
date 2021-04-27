// https://programmers.co.kr/learn/courses/30/lessons/42586

const solution = (progress, speeds) => {
    let p = Array(progress.length).fill(0), cnt = 0;

    while (progress.length > 0) {
        if (progress[0] >= 100) {
            for (let i in progress) {
                if (progress[i] >= 100) {
                    delete progress[i];
                    delete speeds[i]
                    p[cnt] += 1;
                }
                else {
                    break;
                }
            }
            cnt += 1;
            progress = progress.filter(v => Boolean(v));
            speeds = speeds.filter(v => Boolean(v));
        }
        else {
            progress = progress.map((v, i) => v + speeds[i]);
        }
    }

    return p.filter(v => v > 0);
};

// better way

const solution = (progress, speeds) => {
    progress = progress.map((v, i) => Math.ceil((100 - v) / speeds[i]));
    let max = progress[0],
        p = [0];
    for (let i = 0, j = 0; i < progress.length; i += 1) {
        if (progress[i] <= max) {
            p[j] += 1;
        }
        else {
            max = progress[i];
            p[j += 1] = 1;
        }
    }
    return p;
}

console.log(solution([40, 93, 30, 55, 60, 65], [60, 1, 30, 5, 10, 7]))
// solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])