// https://programmers.co.kr/learn/courses/30/lessons/17678

/**
 * 포맷을 가진 시간 형태 HH:MM의 배열로 들어오기 때문에 이를
 * 숫자로 변환 시켜서 정려한 다음 사용하기로 했다.
 * 09:00 같은 경우 시간*24 + 분 형태로 변환
 */

const toMinute = formatDates => {
    return formatDates.map(v => {
        const time = v.split(':');
        return (parseInt(time[0], 10) * 60) + parseInt(time[1], 10);
    });
};

/**
 * 숫자로 변환 시킨 값들을 다시 포맷을 맞춰 출력하기 위한 함수
 * 한 자리수일 경우 앞에 0을 붙여준다.
 */

const fromMinute = minutes => {
    return minutes.map(v => {
        let hour = (Math.floor(v / 60)).toString();
        let minute = (v % 60).toString();
        if (hour.length < 2) hour = '0' + hour;
        if (minute.length < 2) minute = '0' + minute;
        return `${hour}:${minute}`;
    })
};

const solution = (n, t, m, timetable) => {
    // 입력으로 들어오는 도착순서를 숫자로 변환한 다음 오름차순으로 정렬
    let crews = toMinute(timetable).sort((a, b) => a - b);
    // 최초로 도착하는 버스의 시간은 09:00 이며 숫자로 변환하면 540
    let firstBus = toMinute(['09:00'])[0];
    // 반환 값을 담을 변수
    let arriveAt;

    // 총 n번 운행하므로 n번의 반복문을 순회
    for (let i = 0; i < n; i += 1) {
        // seats는 매 버스마다 탑승할 수 있는 승객의 수
        // lastCrew는 마지막으로 탑승한 크루
        let seats = m, lastCrew;
        // 좌석의 수가 여유가 있을 때 크루 배열을 돌면서
        for (let j = 0; j < crews.length && seats > 0; j += 1) {
            // 버스 시각안에 도착한 크루들을 찾는다.
            // 해당 크루들은 -1로 변환 시켜서 이후에 제거할 수 있게 값을 변환
            // 좌석 1자리씩 빼면서 만약 좌석이 0보다 작아지면 더 이상 못타게 한다.
            if (firstBus >= crews[j]) {
                lastCrew = crews[j];
                crews[j] = -1;
                seats -= 1;
            }
        }
        // 이미 탑승한 크루들은 제외한다.
        crews = crews.filter(v => v >= 0);

        // 마지막 버스인데 좌석이 없을 경우
        if (i === n - 1 && seats <= 0) {
            // 마지막 크루가 탑승한 시각보다 1분 빠르게 도착하면 되므로 1을 빼준다.
            arriveAt = fromMinute([lastCrew-1])[0];
        }
        // 마지막 버스인데 좌석이 있을 경우
        else if (i === n - 1 && seats > 0) {
            // 버스 시간에 맞춰서 가면된다.
            arriveAt = fromMinute([firstBus])[0];
        }
        // 다음 버스가 출발하는 시각
        firstBus += t;
    }
    console.log(arriveAt)
    return arriveAt;
};

(() => {
    // m, t, m, timetable, answer
    const testcase = [
        [1, 1, 5, ["08:00", "08:01", "08:02", "08:03"], "09:00"],
        [2, 10, 2, ["09:10", "09:09", "08:00"], "09:09"],
        [2, 1, 2, ["09:00", "09:00", "09:00", "09:00"], "08:59"],
        [1, 1, 5, ["00:01", "00:01", "00:01", "00:01", "00:01"], "00:00"],
        [1, 1, 1, ["23:59"], "09:00"],
        [10, 60, 45, ["23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59"], "18:00"]
    ]
    for (let tc of testcase) {
        solution(tc[0], tc[1], tc[2], tc[3])
    }
})()