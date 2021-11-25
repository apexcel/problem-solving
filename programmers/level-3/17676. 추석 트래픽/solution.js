/**
 * @param {string[]} lines 
 * @returns 
 */
function solution(lines) {

    const times = lines.map(v => {
        const [_, endTime, dueTime] = v.split(' ');
        const [time, ms] = endTime.split('.');

        const end = format(time) + (ms * 0.001);
        const due = (parseFloat(dueTime) - 0.001).toFixed(3);
        const begin = (end - due).toFixed(3);

        return [+begin, end, due];
    });

    let max = -1;
    for (let i = 0; i < times.length; i += 1) {
        let cnt = 1;
        for (let j = i + 1; j < times.length; j += 1) {
            if (times[i][1] + 1 > times[j][0]) {
                cnt += 1;
            }
        }
        if (max < cnt) {
            max = cnt;
        }
    }

    return max;
}

function format(time) {
    const [hh, mm, ss] =time.split(':').map(v => +v);
    return (hh * 3600) + (mm * 60) + ss;
}