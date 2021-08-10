// https://programmers.co.kr/learn/courses/30/lessons/12940

const gcd = (x, y) => x % y === 0 ? y : gcd(y, x % y);

const lcm = (x, y) => x * y / gcd(x, y);

const solution = (n, m) => [gcd(n, m), lcm(n, m)];