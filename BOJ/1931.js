const sc = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(sc[0], 10);
const R = sc.slice(1).map(v => v.split(' ').map(e => parseInt(e, 10)));

const solution = (n, r) => {
    let total = 0, min = 0;
    r.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]).forEach(v => {
        if (v[0] >= min) {
            total += 1;
            min = v[1];
        }
    })
    console.table(total);
};

solution(N, R);

/**
 * 정렬만 잘하면 된다, 끝나는 시간이 같을 때를 고려해야하는 것이 중요.
 * 끝나는 시간이 제일 빠른 순서대로 정렬하고 끝나는 시간이 같을 때는 시작시간이
 * 빠른 순서대로 정렬한다.
 * 이후 끝나는 시간을 저장해가며 저장된 끝나는 시간보다 크거나 같은 시작시간을 찾으면 된다.
 * 끝나는 시간이 빠른 순서대로 정렬을 해놓았으므로 처음 발견하는 시간이 가장 빠른 다음 시간이 된다.
 */