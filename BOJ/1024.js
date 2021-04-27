const sc = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(v => +v);

/**
 * 
 * 첫 항부터 n번째 항까지의 합은 n(a + l) / 2로
 * a는 첫 항 l은 마지막항이다.
 * 근데 어차피 1부터 시작할 것으므로 a 대신 1을 넣어도 된다.
 * const seqSum = (a, n) => n * (a + n) / 2;
 */
const seqSum = n => n * (1 + n) / 2;

const solution = (n, l) => {
    for (let i = l; i <= 100; i += 1) {
        const Sn = seqSum(i - 1);
        const x = Math.floor((n - Sn) / i);

        if (x >= 0) {
            let list = [], sum = 0;
            for (let k = 0; k < i; k += 1) {
                sum += x + k;
                list.push(x + k);
                if (sum === n) {
                    return console.log(list.join(' '));
                }
            }
        }
    }

    return console.log(-1);
};

// solution(18, 2)
solution(sc[0], sc[1]);

/**
 * 처음에는 n을 l로 나누고 기준 숫자 만큼 앞 뒤로 더하거나 빼서
 * 합이 되는 수를 찾으려고 했으나 실패.
 * 수학적 지식을 이용하면 간단하게 풀 수 있는 것으로 수열이므로
 * 수열의 합을 이용한 수학으로 풀면 된다.
 * 예외 조건을 제대로 처리 안해서 연속적으로 틀림.
 */