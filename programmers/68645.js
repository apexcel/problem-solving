// https://programmers.co.kr/learn/courses/30/lessons/68645

const solution = n => {
    // Array(n).fill(0) 0으로 초기화 안 한이유는 0 지울 때 n번 돌아야 함
    // 근데 초기화하지 않으면 <empty item>으로 취급되서
    // 반환 값에서 flat()를 쓴 경우 포함되지 않고 숫자만 나옴
    const d2 = Array.from(Array(n), () => Array(n));
    const max = n * (n + 1) / 2;
    let dir = 0; // down: 0, right: 1, diagonal: 2
    let i = 1, x = 0, y = 0, change = n;

    while (i <= max) {
        switch (dir) {
            case 0:
                d2[y++][x] = i;
                break;
            case 1:
                d2[y][x++] = i;
                break;
            case 2:
                d2[y--][x--] = i;
                break;
        }
        i += 1;
        if (i === n) {
            change -= 1;
            n += change;
            dir = (dir + 1) % 3;
        }
    }
    return d2.flat();
};

solution(6)