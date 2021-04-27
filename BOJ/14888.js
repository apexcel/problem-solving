const sc = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(sc[0], 10),
    nums = sc[1].split(' ').map(v => parseInt(v, 10)),
    op = sc[2].split(' ').map(v => parseInt(v, 10));

// 최대 값은 -무한대, 최소 값은 무한대로 설정하여 비교하기 쉽게한다
// 다른 언어에서는 충분히 큰 수로 대체 가능
let max = -Infinity, min = Infinity;

// 기존에 계속 연산을 하던 값, 새로 들어온 값, 연산자 번호
const calculate = (current, lastest, operator) => {
    switch (operator) {
        case 0:
            return current + lastest;
        case 1:
            return current - lastest;
        case 2:
            return current * lastest;
        case 3:
            return current >= 0 ? Math.floor(current / lastest) : -(Math.floor(-current / lastest));
    }
};

const pick = (picked, current, index) => {
    // 뽑은 개수가 N - 1개가 될 때 종료
    if (picked === N - 1) {
        // 비교해서 저장
        max = Math.max(max, current);
        min = Math.min(min, current);
        return;
    }

    for (let i = 0; i < 4; i += 1) {
        if (op[i] > 0) {
            op[i] -= 1;
            pick(picked + 1, calculate(current, nums[index], i), index + 1);
            op[i] += 1;
        }
    }
}

pick(0, nums[0], 1);
console.log(max ? max : 0);
console.log(min ? min : 0);

/**
 * 전형적인 DFS문제로 연산자의 순열을 구해내면 된다.
 * 자바스크립트로 문제를 풀이하면서 주의 할 점
 * 음수로 나눗셈할 때 음수인지 확인하고 계산해야 한다. 그냥 부호만 바꿔주면 틀림
 * +0 과 -0을 다르게 처리할 수도 있으니 주의해야 함.
 */