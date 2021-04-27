// https://programmers.co.kr/learn/courses/30/lessons/62048

/**
 * 최대공약수와 관련된 문제
 * 좌표평면에 x좌표와 y좌표가 지나는 꼭지점의 개수가 최대공약수 만큼 되는 것을 이용
 */


const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
const solution = (w, h) => w * h - (w + h - gcd(w, h));

console.log(gcd(8, 12))
console.log(solution(8, 12))

/**
 * 다른 풀이
 * 기울기를 구해서 푸는 방법
 * 기울기 = y증가량 / x증가량
 */

const sol2 = (w, h) => {
    const slope = h / w;
    let res = 0;

    for (let i = 1; i <= w; i += 1) {
        res += Math.ceil(slope * i);
    }
    return 2 * ((h * w) - res);
}

console.log(sol2(8, 12))