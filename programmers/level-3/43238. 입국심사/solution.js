/** https://programmers.co.kr/learn/courses/30/lessons/43238
 * @param {number} n 
 * @param {number[]} times 
 * @returns {number}
 */
function solution(n, times) {
    n = BigInt(n);
    times.sort((a, b) => a - b);
    let lo = 1n,
        hi = BigInt(times[times.length - 1]) * n,
        total = hi;

    while (lo <= hi) {
        const mid = (lo + hi) / 2n
            , operations = times.reduce((acc, cur) => acc + (mid / BigInt(cur)), 0n);

        // 심사관당 수행한 사람 수가 더 많거나 같은 경우에
        if (operations >= n) {
            // 지금까지 찾아낸 시간보다 더 적은 시간내로 수행할 수 있는 경우 더 적은 시간으로 변경
            if (total > mid) total = mid;
            hi = mid - 1n;
        }
        else {
            lo = mid + 1n;
        }
    }
    return total;
}

/**
 * 시간을 정해놓고 해당 시간동안 심시관마다 몇 명이나 처리할 수 있는가를 계산한다.
 * 최소한으로 걸리는 시간은 1분이고 최대 걸리는 시간은 최대값 * 인원 수 이다.
 * 
 * n = 6, times = [7, 10]일 때, 처리하는 최소 시간은 1분 최대 시간은 10 * 6 = 60분 => Math.floor((1 + 60) / 2) = 30
 * 30 / 7 = 4.xx
 * 30 / 10 = 3
 * => 분당 30분 동안 최대 7명을 처리할 수 있다. 이는 n보다 크므로 최대 처리 시간에 대해 이분탐색을 진행한다.
 * 
 * Math.floor((1 + 29) / 2) = 15
 * 15 / 7 = 2.xx
 * 15 / 10 = 1.xx
 * => 분당 15분 동안 최대 3명을 처리할 수 있다. n보다 작으므로 다시 이분 탐색을 진행한다.
 * 
 * Math.floor((16 + 29) / 2) = 22
 * 22 / 7 = 3.xx
 * 22 / 10 = 2.xx
 * => 분당 22분 동안 최대 5명을 처리할 수 있다. 이는 n보다 작으므로 이분탐색을 진행한다.
 * 
 * Math.floor((23 + 29) / 2) = 26
 * 26 / 7 = 3.xx
 * 26 / 10 = 2.xx
 * => 분당 26분 동안 최대 5명을 처리할 수 있다. 이는 n보다 작으므로 다시 진행
 * 
 * 계속 해서 진행해서 알맞은 시간을 찾는다.
 */