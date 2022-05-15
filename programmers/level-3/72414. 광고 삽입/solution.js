const toSeconds = (formatTime) => {
    const [hh, mm, ss] = formatTime.split(':').map(Number);
    return 3600 * hh + 60 * mm + ss;
}

const toFormattedTime = (seconds) => {
    const hh = Math.floor(seconds / 3600)
        , mm = Math.floor(seconds / 60) % 60
        , ss = seconds % 60;

    return [hh, mm, ss].map(time => time < 10 ? '0' + time : time).join(':');
}

function solution(play_time, adv_time, logs) {
    const playTime = toSeconds(play_time), adTime = toSeconds(adv_time);
    const timeLine = Array(playTime).fill(0);

    for (let log of logs) {
        const [begin, end] = log.split('-').map(toSeconds);
        timeLine[begin] += 1;
        timeLine[end] -= 1;
    }

    for (let i = 1; i < playTime; i += 1) {
        timeLine[i] += timeLine[i - 1];
    }

    for (let i = 1; i < playTime; i += 1) {
        timeLine[i] += timeLine[i - 1];
    }

    let mx = timeLine[adTime - 1], idx = 0;
    for (let i = adTime - 1; i < playTime; i += 1) {
        if (mx < timeLine[i] - timeLine[i - adTime]) {
            mx = timeLine[i] - timeLine[i - adTime];
            idx = i - adTime + 1;
        }
    }
    return toFormattedTime(idx);
}