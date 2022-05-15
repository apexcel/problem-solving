const isPossible = (stones, k, mid) => {
    // 현재 건너뛰는 횟수
    let jump = 0;
    for (let stone of stones) {
        // 건너려는 사람 수 보다 stone의 횟수가 작거나 같다는 것은
        // stone - mid <= 0 이므로 다음 사람은 건너뛰어야 한다.
        // stone > mid면 건너뛸 필요 없음
        jump = stone <= mid ? jump + 1 : 0;
        // 현재 건너뛴 횟수가 주어진 건너뛰기 횟수보다 크면 못 건넌다
        if (jump >= k) return false;
    }
    return true;
}

const solution = (stones, k) => {
    // 건널 수 있는 최소 사람 수, 최대 사람 수
    let lo = 1, hi = 0, mid, res;
    stones.forEach(stone => {
        if (hi < stone) hi = stone;
    });

    while (lo <= hi) {
        // 이번에 건너려는 사람의 수
        mid = (lo + hi) >> 1;
        // 건널 수 있는 경우
        if (isPossible(stones, k, mid)) {
            lo = mid + 1;
            res = lo;
        }
        else hi = mid - 1;
    }
    return res;
}

solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3)