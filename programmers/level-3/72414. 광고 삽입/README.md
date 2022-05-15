# 풀이

## 첫 번째 풀이

4문제 제외하고 모두 통과. 구간합을 구하는 것과 첫 원소를 빼고 마지막 원소를 더해주는 것을 떠올리지 못하면 풀이 하기 어렵다.

```js
const getSeconds = (formatTime) => {
    const [hh, mm, ss] = formatTime.split(':').map(Number);
    return 3600 * hh + 60 * mm + ss;
}

const format = (seconds) => {
    const hh = Math.floor(seconds / 3600)
        , mm = Math.floor((seconds / 60)) % 60
        , ss = seconds % 60;

    return [hh, mm, ss].map(time => time < 10 ? '0' + time : time).join(':')
}

function solution(play_time, adv_time, logs) {
    const playTime = getSeconds(play_time), adTime = getSeconds(adv_time);
    // timeLine[x] = x초에 시청한 시청자 수
    const timeLine = Array(playTime).fill(0);

    for (let log of logs) {
        const [begin, end] = log.split('-').map(getSeconds);
        // begin부터 end까지 1을 더해줌으로서 해당 구간의 시청자수를 늘려준다.
        for (let j = begin; j < end; j += 1) {
            timeLine[j] += 1;
        }
    }

    let mx = 0;
    // 0초부터 adTime, 0초 부터 광고 시간까지의 시청자 합
    for (let i = 0; i < adTime; i += 1) {
        mx += timeLine[i];
    }

    let cnt = mx, front = timeLine[0], idx = 0;
    // adTime부터 전체 시간까지 순회
    for (let i = adTime; i < playTime; i += 1) {
        // 가장 먼저 더했던 값을 빼고
        cnt += timeLine[i] - front;
        // 새로운 값을 더한다
        front = timeLine[i - adTime + 1];
        if (mx < cnt) {
            mx = cnt;
            idx = i - adTime + 1;
        }
    }

    return format(idx);
}
```

## 두 번째 풀이

```js
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

    // 시청 시작 지점에는 +1, 종료 지점에는 -1을 더해준다
    for (let log of logs) {
        const [begin, end] = log.split('-').map(toSeconds);
        timeLine[begin] += 1;
        timeLine[end] -= 1;
    }

    // 각 구간의 시청자수
    for (let i = 1; i < playTime; i += 1) {
        timeLine[i] += timeLine[i - 1];
    }

    // 각 구간의 누적 시청자 수
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
```