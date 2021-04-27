const sc = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let cache = [1n, 1n, 2n];

for (let i = 3; i <= sc; i += 1) {
    cache[i] = cache[i-2] + cache[i-1];
}

console.log(cache[sc-1].toString().replace('n', ''));

/*
    직접 구해보면 1을 시작으로 이후 자리수 마다 1이나 0을 붙여서 조건에
    부합하는 수를 구하면된다. 구하다 보면
    1 => [1]
    2 => [10]
    3 => [100, 101]
    4 => [1000, 1001, 1010]
    이와 같은 형태로 만들어지는데 개수를 확인해보면 피보나치 수열을 이루고 있다.
    다만 그대로 제출하면 틀렸다고 나오는데 그 이유는 자바스크립트의 Number가 수를 제대로 표현하지 못하기 때문.
    따라서 BigInt나 문자열 형태로 출력해야한다.
*/